import express, { Application } from 'express';
import dotenv from 'dotenv';
import config from 'config';
import morganMiddleware from './logger/morgan.middlware';
import logger from './logger/Logger';
dotenv.config();

const app: Application = express();
const port = config.get('port');

app.use(morganMiddleware);
app.set('json spaces', 2);

app.get('/', (req, res, next) => {
	res.status(200).json({ message: 'winston logger' });
});

app.listen(port, () => {
	logger.info(`Server listening on port ${port}`);
});
