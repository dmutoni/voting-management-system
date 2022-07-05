import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';
import { registerSchema } from 'swaggiffy';

mongoose.Promise = global.Promise;

const votedUserSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    votedUser: {
        type: String,
        required: true
    },
    candidate: {
        type: String,
        required: true,
    }
});

registerSchema('VotedUser', votedUserSchema, {orm: 'mongoose'});
const VotedUser = mongoose.model('VotedUser', votedUserSchema);

export default VotedUser;

