import Token from '../models/token.model.js';
import { meterValidation } from '../utils/validation.utils.js';

const getToken = async (req, res) => {
    try {
        const validMoney = validateMoney(req.body.money);
        if (!validMoney) {
            return res.status(400).json({
                message: 'Invalid money',
                success: false
            });
        }
        const {
            error
        } = meterValidation.validate({meterNumber: req.body.meterNumber.toString(), money: req.body.money});
        if (error) return res.status(400).json({
            message: error.details[0].message,
            success: false
        });
        const token = generateRandomToken();
        const days = assignRemainingDaysAccordingToMoney(req.body.money);

        
        const newToken = await Token.create({
            token: token,
            meterNumber: req.body.meterNumber,
            lastActiveDate: days
        });
        const savedToken = await newToken.save();
        if (savedToken) {
            return res.status(201).json({
                success: true,
                message: 'Token generated successfully',
                data: savedToken
            })
        }
    } catch (err) {
        return res.status(400).json({
            message: 'Error occurred',
            error: err.message
        })
    }
}
const validateMoney = (money) => {
    if (money < 0) {
        return false;
    } else if (money % 100 != 0) {
        return false;
    } else if (money > 182500) {
        return false;
    }
    return true;
}

const generateRandomToken = () => {
    const token = Math.floor(Math.random() * 1000000);
    return token;
}

const assignRemainingDaysAccordingToMoney = (money) => {
    const days = money / 100;
    return days;
}

export { getToken };