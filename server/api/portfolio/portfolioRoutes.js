import { Router } from 'express';
import CheckAuth from '../../auth/auth';
import PortfolioCtrl from './portfolioController';

const controller = new PortfolioCtrl();
const auth = new CheckAuth();
const checkUser = [auth.decodeToken(), auth.getFreshUser()];
const portfolioRouter = Router();

portfolioRouter
    .route('/:userId/list')
    .get(checkUser, controller.list_all_portfolios);

portfolioRouter
    .route('/:userId')
    .get(checkUser, controller.portfolio_images_for_a_user)
    .post(checkUser, controller.create_portfolio)
    .delete(checkUser, controller.delete_a_portfolio_by_userId_for_a_user);

portfolioRouter.param('portfolioId', controller.params);
portfolioRouter
    .route('/:portfolioId/:userId')
    .get(checkUser, controller.images_from_a_portfolio)
    .put(checkUser, controller.update_portfolio);

portfolioRouter
    .route('/:imageId/:portfolioId/:userId')
    .delete(checkUser, controller.delete_a_image_by_imageId_for_a_user);

export default portfolioRouter;
