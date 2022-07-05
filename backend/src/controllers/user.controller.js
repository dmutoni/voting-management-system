import User from '../models/user.model.js';
import hashPassword from '../utils/hashPassword.js';
import {schema} from '../utils/validation.utils.js';
import bcrypt from 'bcryptjs';

const createUser = async (req, res) => {
    try {
        const {
            error
        } = schema.validate(req.body);
        if (error) return res.status(400).json({
            message: error.details[0].message,
            success: false
        })
        const oldUser = await User.findOne({
            email: req.body.email
        });
        if (oldUser) return res.status(400).json({
            success: false,
            message: 'User already exists'
        });
        const hashedPassword = await hashPassword(req.body.password);
        const user = new User({
            name: req.body.name,
            email: req.body.email,
            password: hashedPassword,
            gender: req.body.gender,
            votes: 0,
        });
        const savedUser = await user.save();
        if (savedUser) return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: savedUser
        })
    } catch (err) {
        return res.status(400).json({
            message: 'Error registering user',
            error: err.message
        })
    };
}

const login = async (req, res) => {
    try {
        if (!req.body.email || !req.body.password) return res.status(401).json({
            message: 'Email or password should exist',
            status: false
        });
        const user = await User.findOne({
            email: req.body.email
        });
        if (!user) return res.status(401).json({
            message: 'Invalid credentials',
            status: false
        });
        const matchedPassword = await bcrypt.compare(req.body.password, user.password);
        if (!matchedPassword) return res.status(401).json({
            message: 'Invalid credentials',
            status: false
        });
        return res.status(200).json({
            token: await user.generateAuthToken()
        });
    } catch (error) {
        return res.status(400).json({
            message: 'Error occurred',
            error: error.message
        })
    }
}

const getUsers = async (req, res) => {
    return await User.find().then((users) => {
        res.status(200).json({
            success: true,
            message: 'Users retrieved successfully',
            data: users
        })
    }).catch((err) => {
        res.status(400).json({
            message: 'Error retrieving users',
            error: err.message
        })
    });
}

const vote = async (req, res) => { 
    try {
        const user = await User.findOne({
            _id: req.params.id
        });
        if (!user) return res.status(400).json({
            message: 'User not found',
            success: false
        });
        user.votes = user.votes + 1;
        console.log(user);
        const savedUser = await user.save();
        if (savedUser) return res.status(200).json({
            success: true,
            message: 'User voted successfully',
            data: savedUser
        })
    } 
    catch (err) {
        return res.status(400).json({
            message: 'Error occurred',
            error: err.message
        })
    }
}

const updateUser = async (req, res) => {
    const filter = {
        _id: req.params.id
    }
    const user = await userExists(req.params.id);
    if (!user) {
        return res.status(404).json({
            message: 'user does not exist',
            success: false
        });
    }

    return await User.findOneAndUpdate(filter, {
        name: req.body.name,
        email: req.body.email,
        gender: req.gender
    }, {
        new: true
    }).then((users) => {
        res.status(200).json({
            success: true,
            message: 'Users updated successfully',
            data: users
        })
    }).catch((err) => {
        res.status(400).json({
            message: 'Error editing users',
            error: err.message
        })
    });;
}

const userExists = async (id) => {
    const user = await User.findById(id);
    if (!userExists) {
        return false;
    }
    return user;
}

const findById = async (req, res) => {
    const user = await userExists(req.params.id);
    if (!user) {
        return res.status(404).json({
            message: 'user does not exist',
            success: false
        });
    }
    return await User.findById(req.params.id).then((user) => {
        res.status(200).json({
            message: 'User retrieved successfully',
            data: user
        })
    }).catch((err) => {
        res.status(404).json({
            message: 'User not found',
            error: err.message
        })

    })
}

const deleteUser = async (req, res) => {
    const filter = {
        _id: req.params.id
    }
    const existingUser = await User.findById(req.params.id);
    if (!existingUser) {
        return res.status(404).json({
            success: false,
            message: 'User with id not found'
        });
    }
    return await User.findByIdAndDelete(filter).then(() => {
        res.status(200).json({
            success: true,
            message: 'User deleted successfully'
        })
    }).catch((err) => {
        res.status(400).json({
            message: 'Error deleting user',
            error: err.message
        });
    });
}
export {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    findById,
    login,
    vote
}