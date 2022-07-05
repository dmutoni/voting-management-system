import express from 'express';
import { registerDefinition } from 'swaggiffy';
import { saveVotedUser } from '../controllers/votes.controller.js';

const voteRouter = express.Router({
    mergeParams: true
});

voteRouter.route("/").post(saveVotedUser);

registerDefinition(voteRouter, {tags: 'Votes', basePath: '/api/v1/votes', mappedSchema: 'VotedUser'});

export default voteRouter;