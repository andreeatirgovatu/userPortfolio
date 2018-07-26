import { Router } from 'express';
import jwt from 'jsonwebtoken';
import PortfolioCtrl from '../portfolio/portfolioController';
import config from '../../config';

const portfolioCtrl = new PortfolioCtrl();
const paypalRouter = Router();

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
                        return res
                            .status(401)
                            .send({ success: false, error: 'Invalid authorization token' });
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

paypalRouter.route('/:userId').post(ensureAuthorized, portfolioCtrl.payNow);

paypalRouter.route('/success').get(portfolioCtrl.execute);

export default paypalRouter;
