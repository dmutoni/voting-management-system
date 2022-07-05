import express from 'express';
import { registerDefinition } from 'swaggiffy';
const meterRoute = express.Router();

import { getToken } from '../controllers/meter.controller.js';

meterRoute.post('/', getToken);

registerDefinition(meterRoute, {tags: 'Meters', basePath: '/api/v1/meters', mappedSchema: 'Token'});

export default meterRoute;