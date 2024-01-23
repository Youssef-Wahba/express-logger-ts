import morgan, { StreamOptions } from 'morgan';

import Logger from './Logger';

const stream: StreamOptions = {
	write: (message: string) => Logger.http(message),
};

/**
 * Skip all the Morgan http log if the
 * application is not running in development mode
 */
const skip = (): boolean => {
	const env: string | undefined = process.env.NODE_ENV;
	return env !== 'development';
};

/**
 * express middlware to hadle logging in console
 */
const morganMiddleware = morgan(
	':remote-addr - :method - :url - :status - :response-time ms - ":user-agent" - :res[content-length]',
	{ stream, skip }
);

export default morganMiddleware;
