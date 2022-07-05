import {
    protect,
    authorize
} from '../middlewares/auth.middleware.js';

import {
    createUser,
    getUsers,
    updateUser,
    deleteUser,
    findById,
    vote
} from '../controllers/user.controller.js'
import { registerDefinition } from 'swaggiffy';

import express from 'express';

const router = express.Router({
    mergeParams: true
});

router.post("/", [protect, authorize('Standard')],createUser);

router.route('/').get(getUsers);

router.route('/:id').post(vote);

router.route('/:id').get(findById);

router.route('/:id').put(updateUser);

router.route('/:id').delete(deleteUser);

registerDefinition(router, {tags: 'Users', basePath: '/api/v1/users', mappedSchema: 'User'});

export default router;