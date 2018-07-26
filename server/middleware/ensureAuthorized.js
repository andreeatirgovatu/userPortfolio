import config from '../config';
import jwt from 'jsonwebtoken';

const ensureAuthorized = (req, res, next) => {
    let bearerHeader = req.headers.authorization;
    if (bearerHeader) {
        let bearerToken = bearerHeader.split(' ');
        if (bearerToken.length === 2) {
            jwt.verify(
                bearerToken[1],
                config.secrets.jwtSecret,
                (error, decodedToken) => {
                    if (error) {
                        next(error);
                    }
                    if (decodedToken.exp > new Date().getTime()) {
                        return res
                            .status(400)
                            .send({ success: false, error: 'Token expired!' });
                    }
                    req.decodedToken = decodedToken;
                    next();
                }
            );
        }
    } else {
        res
            .status(401)
            .send({ success: false, error: 'An authorization header is required' });
    }
};
export default ensureAuthorized;
