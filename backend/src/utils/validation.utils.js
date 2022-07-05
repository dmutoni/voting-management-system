import Joi from 'joi';

const schema = Joi.object({
    name: Joi.string().alphanum().min(3).max(30).required(),
    password: Joi.string().min(8).required(),
    repeat_password: Joi.ref('password'),
    email: Joi.string().email({
        minDomainSegments: 2,
        tlds: {
            allow: ['com', 'net']
        }
    }).required(),
    gender: Joi.string().valid('female', 'male')
})

const meterValidation = Joi.object({
    meterNumber: Joi.string().min(6).max(6).required(),
    money: Joi.number().required()
})
export {
    schema,
    meterValidation
};