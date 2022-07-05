import mongoose from 'mongoose';
import { registerSchema } from 'swaggiffy';

// mongoose = global.Promise;

const meterSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    meterNumber: {
        type: Number,
        required: true,
        minlength: 6,
        maxlength: 50
    }
});

const Meter = mongoose.model('Meter', meterSchema);
registerSchema('Meter', meterSchema, {orm: 'mongoose'});
export default Meter;