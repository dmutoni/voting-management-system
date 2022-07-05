import mongoose from 'mongoose';
import { registerSchema } from 'swaggiffy';

mongoose.Promise = global.Promise;

const candidateSchema = new mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    candidateName: {
        type: String,
        required: true,
    },
    partyName: {
        type: String,
        required: true
    },
    profileUrl: {
        type: String,
        required: true
    },
    votes: {
        type: Number,
        required: true
    },
    postTitle: {
        type: String,
        required: true
    },
    postDescription: {
        type: String,
        required: true
    },
});

const Candidate = mongoose.model('Candidate', candidateSchema);
registerSchema('Candidate', candidateSchema, {orm: 'mongoose'});
export default Candidate;