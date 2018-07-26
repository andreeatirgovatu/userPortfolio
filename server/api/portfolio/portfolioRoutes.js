import { Router } from 'express';
import CheckAuth from '../../auth/auth';
import PortfolioCtrl from './portfolioController';

const controller = new PortfolioCtrl();
const auth = new CheckAuth();
const checkUser = [auth.decodeToken(), auth.getFreshUser()];
const portfolioRouter = Router();
console.log(controller);
portfolioRouter.route('/:userId/list').get(checkUser, controller.allPortfolios);

portfolioRouter
    .route('/:userId')
    .get(checkUser, controller.portfolioImages)
    .post(checkUser, controller.createPortfolio)
    .delete(checkUser, controller.deletePortfolio);

portfolioRouter.param('portfolioId', controller.params);
portfolioRouter
    .route('/:portfolioId/:userId')
    .get(checkUser, controller.imagesFromPortfolio)
    .put(checkUser, controller.updatePortfolio);

portfolioRouter
    .route('/:imageId/:portfolioId/:userId')
    .delete(checkUser, controller.deleteImage);

export default portfolioRouter;
