import { Router } from 'express';
import CheckAuth from '../../auth/auth';
import FriendCtrl from './friendController';

const auth = new CheckAuth();
const controller = new FriendCtrl();
const checkUser = [auth.decodeToken(), auth.getFreshUser()];
const friendsRouter = Router();

friendsRouter
    .route('/:userId')
    .get(checkUser, controller.getAddedFriends)
    .post(checkUser, controller.addFriend)
    .delete(checkUser, controller.removeAllFriends);

friendsRouter.param('friendId', controller.params);
friendsRouter
    .route('/:friendId/:userId')
    .get(checkUser, controller.getFriend)
    .delete(checkUser, controller.removeFriend);

export default friendsRouter;
