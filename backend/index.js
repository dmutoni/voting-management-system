import express from 'express';
import bodyParser from 'body-parser';
import logger from 'morgan';
import router from './src/routers/user.routes.js';
import connectToDb from './config/dbConfig.js';
import dotenv from 'dotenv';
import authRoute from './src/routers/auth.routes.js';
import meterRoute from './src/routers/meter.route.js';
import { Swaggiffy } from 'swaggiffy';
import cors from 'cors';
import './src/models/meter.model.js';
import candidateRouter from './src/routers/candidate.routes.js';
import voteRouter from './src/routers/vote.routes.js';

const app = express();

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use(logger('dev'));

dotenv.config({path: '.env'});

await connectToDb();

app.get('/', (req, res) => {
    return res.status(200).json({message: 'Welcome to the voting system api'});
})
app.use('/api/v1/users', router);
app.use('/api/v1/auth', authRoute);
app.use('/api/v1/meters', meterRoute);
app.use('/api/v1/candidates', candidateRouter);
app.use('/api/v1/votes', voteRouter);

const port = 5050;

app.listen(port, () => {
    console.log(`Our server is running on port  $port`);
});

new Swaggiffy().setupExpress(app).swaggiffy()