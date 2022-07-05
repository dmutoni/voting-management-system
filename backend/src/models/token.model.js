import mongoose from 'mongoose';
import { registerSchema } from 'swaggiffy';

mongoose.Promise = global.Promise;

const schema = {
    id: mongoose.Schema.Types.ObjectId,
    token: {
        type: Number,
        required: true,
        minlength: 8,
        maxlength: 8,
    },
    lastActiveDate: Number,
    status: {
        default: 'ACTIVE',
        type: String,
        enum: ['ACTIVE', 'INACTIVE']
    },
    meterNumber: {
        type: Number,
        required: true,
        minlength: 6,
        maxlength: 50
    }

}
const tokenSchema = new mongoose.Schema(schema);

const Token = mongoose.model('Token', tokenSchema);
registerSchema('Token', tokenSchema, {orm: 'mongoose'});
export default Token;