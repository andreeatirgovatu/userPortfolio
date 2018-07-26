import User from './userModel';
import _ from 'lodash';

class UserCtrl {
    constructor() {}

    params(req, res, next, id) {
        User.findById(id)
            .select('-password')
            .exec()
            .then(
                user => {
                    if (!user) {
                        next(new Error('No user with that id'));
                    } else {
                        req.user = user;
                        next();
                    }
                },
                err => {
                    next(err);
                }
            );
    }
    get_all_users(req, res, next) {
        User.find({})
            .select('-password')
            .exec()
            .then(
                users => {
                    res.json(
                        users.map(user => {
                            return user.toJson();
                        })
                    );
                },
                err => {
                    next(err);
                }
            );
    }
    read_a_user(req, res, next) {
        delete req.user.reset_password_expires;
        delete req.user.reset_password_token;
        res.json(req.user.toJson());
    }
    update_a_user(req, res, next) {
        let user = _.merge(req.user, req.body);
        user.save((err, saved) => {
            if (err) {
                next(err);
            } else {
                res.json(saved.toJson());
            }
        });
    }
    delete_a_user(req, res, next) {
        req.user.remove((err, removed) => {
            if (err) {
                next(err);
            } else {
                res.json(removed.toJson());
            }
        });
    }
    image_profile(req, res, next) {
        res.json(req.user.file);
    }
}

export default UserCtrl;
