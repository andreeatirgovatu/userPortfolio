import { Router } from 'express';
import CheckAuth from '../../auth/auth';
import UserCtrl from './userController';

const controller = new UserCtrl();
const auth = new CheckAuth();
const checkUser = [auth.decodeToken(), auth.getFreshUser()];
const usersRouter = Router();

usersRouter.param('userId', controller.params);

usersRouter.route('/').get(checkUser, controller.get_all_users);

usersRouter
    .route('/:userId')
    .get(checkUser, controller.read_a_user)
    .put(checkUser, controller.update_a_user)
    .delete(checkUser, controller.delete_a_user);

usersRouter.route('/image/:userId').get(checkUser, controller.image_profile);

export default usersRouter;
