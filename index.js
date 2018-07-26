import config from './server/config';
import app from './server/server';
import Logger from './server/util/logger';

const logger = new Logger();

app.listen(config.port, 'localhost', error => {
    return error
        ? logger.log(error)
        : logger.log('Listening at http://localhost:' + config.port);
});
