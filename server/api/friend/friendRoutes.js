import { Router } from 'express';
import CheckAuth from '../../auth/auth';
import FriendCtrl from './friendController';

const auth = new CheckAuth();
const controller = new FriendCtrl();
const checkUser = [auth.decodeToken(), auth.getFreshUser()];
const friendsRouter = Router();

friendsRouter
    .route('/:userId')
    .get(checkUser, controller.get_added_friends)
    .post(checkUser, controller.add_friend)
    .delete(checkUser, controller.remove_all_friends);

friendsRouter.param('friendId', controller.params);
friendsRouter
    .route('/:friendId/:userId')
    .get(checkUser, controller.get_friend)
    .delete(checkUser, controller.remove_friend);

export default friendsRouter;
