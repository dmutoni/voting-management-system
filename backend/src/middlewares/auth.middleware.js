import jwt from 'jsonwebtoken'
import User from '../models/user.model.js';
const protect = async (req, res, next) => {
    try{
        
        let token;
        if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
            token = req.headers.authorization.split(' ')[1];
        };
        if (!token) {
            return res.status(401).json({message: "Token not found"});
        }

       
        try {

            const decoded = jwt.verify(token, process.env.TOKEN_SECRET);

            let user = await User.findOne({_id: decoded.id});

            req.user = user;
            return next();
        } catch (error) {
            return res.status(401).json({success: false, message: error});
        }
    } catch (error) {
        return res.status(401).json({success: false, message: error});
    }
}

const authorize = (...roles) => {
    return (req, res, next) => {
        if (!roles.includes(req.user.role)) {
            try {
                return next(
                    res.status(403).json({message: `User role ${req.user.role} is not authorized to access this route`})
                );
            } catch (error) {
                return res.status(400).send({error: error.message})
            }
        }
        next();
    }
}

export {
    protect,
    authorize
}