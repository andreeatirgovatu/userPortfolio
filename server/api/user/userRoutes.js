import { Router } from 'express';
import CheckAuth from '../../auth/auth';
import UserCtrl from './userController';

const controller = new UserCtrl();
const auth = new CheckAuth();
const checkUser = [auth.decodeToken(), auth.getFreshUser()];
const usersRouter = Router();

usersRouter.param('userId', controller.params);

usersRouter.route('/').get(checkUser, controller.getAllUsers);

usersRouter
    .route('/:userId')
    .get(checkUser, controller.readUser)
    .put(checkUser, controller.updateUser)
    .delete(checkUser, controller.deleteUser);

usersRouter.route('/image/:userId').get(checkUser, controller.imageProfile);

export default usersRouter;
