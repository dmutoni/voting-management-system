import express from 'express';
const authRoute = express.Router();

import { login } from '../controllers/user.controller.js'

authRoute.post('/', login);

export default authRoute;
