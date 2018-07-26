import { Router } from 'express';
import PortfolioCtrl from '../portfolio/portfolioController';
import ensureAuthorized from '../../middleware/ensureAuthorized';

const portfolioCtrl = new PortfolioCtrl();
const paypalRouter = Router();

paypalRouter.route('/:userId').post(ensureAuthorized, portfolioCtrl.payNow);

paypalRouter.route('/success').get(portfolioCtrl.execute);

export default paypalRouter;
