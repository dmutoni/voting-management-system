import express from 'express';
import { registerDefinition } from 'swaggiffy';
import { deleteCandidate, getCandidate, getCandidateByParty, getCandidateByVotes, getCandidates, saveCandidate, updateCandidate } from '../controllers/candidate.controller.js';

const candidateRouter = express.Router({
    mergeParams: true
});

candidateRouter.route("/").post(saveCandidate);

candidateRouter.route('/').get(getCandidates);

candidateRouter.route('/:id').get(getCandidate);

candidateRouter.route('/vote/:id').get(getCandidateByVotes);

candidateRouter.route('/:id').put(updateCandidate);

candidateRouter.route('/party/:id').get(getCandidateByParty);

candidateRouter.route('/:id').delete(deleteCandidate);

registerDefinition(candidateRouter, {tags: 'Candidates', basePath: '/api/v1/candidates', mappedSchema: 'Candidate'});

export default candidateRouter;