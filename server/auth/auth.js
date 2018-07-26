import jwt from 'jsonwebtoken';
import expressJwt from 'express-jwt';
import config from '../config';
import User from '../api/user/userModel';

const checkToken = expressJwt({ secret: config.secrets.jwtSecret });

class CheckAuth {
    constructor() {}

    decodeToken() {
        return (req, res, next) => {
            if (req.query && req.query.hasOwnProperty('access_token')) {
                req.headers.authorization = 'Bearer ' + req.query.access_token;
            }
            checkToken(req, res, next);
        };
    }
    getFreshUser() {
        return (req, res, next) => {
            User.findById(req.user._id).then(
                user => {
                    if (!user) {
                        res.status(401).send({ message: 'Unauthorized' });
                    } else {
                        req.user = user;
                        next();
                    }
                },
                err => {
                    next(err);
                }
            );
        };
    }
    checkUserByEmail() {
        return (req, res, next) => {
            var email = req.body.email;

            if (!email) {
                res.status(400).send({ message: 'You need a email' });
                return;
            }

            User.findOne({ email: email }).then(
                user => {
                    if (!user) {
                        res.status(404).send({ message: 'No user with the given email' });
                    } else {
                        req.user = user;
                        next();
                    }
                },
                err => {
                    next(err);
                }
            );
        };
    }
    checkUserByToken() {
        return (req, res, next) => {
            var token = req.params.token;

            if (!token) {
                res.status(400).send({ message: 'You need a token' });
                return;
            }
            User.findOne({ reset_password_token: token }).then(
                user => {
                    if (!user) {
                        res.status(404).send({ message: 'User not found!' });
                    } else {
                        req.user = user;
                        next();
                    }
                },
                err => {
                    next(err);
                }
            );
        };
    }
    verifyUser() {
        return (req, res, next) => {
            var email = req.body.email;
            var password = req.body.password;
            console.log(req.body);
            if (!email || !password) {
                res.status(500).send({ message: 'You need an email and password' });
                return;
            }

            User.findOne({ email: email }).then(
                user => {
                    if (!user) {
                        res.status(404).send({ message: 'No user with the given email' });
                    } else {
                        if (!user.authenticate(password)) {
                            res.status(401).send({ message: 'Wrong password' });
                        } else {
                            req.user = user;
                            next();
                        }
                    }
                },
                err => {
                    next(err);
                }
            );
        };
    }
    signToken(id) {
        return jwt.sign({ _id: id }, config.secrets.jwtSecret, {
            expiresIn: config.expireTime
        });
    }
}

export default CheckAuth;
