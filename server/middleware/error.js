import Logger from '../util/logger';

const logger = new Logger();

const error = (err, req, res, next) => {
    logger.log(err.status);
    logger.log(err.stack);

    switch (err.status) {
    case 400:
        res.status(400).send({ message: 'Bad Request' });
        return;
    case 401:
        res.status(401).send({ message: 'Invalid token' });
        return;
    case 403:
        res.status(403).send({ message: 'Forbidden' });
        return;
    case 404:
        res.status(404).send({ message: 'Not found' });
        return;
    default:
        res.status(500).send({ message: err.message });
        return;
    }
};

export default error;
