import User from '../api/user/userModel';
import CheckAuth from './auth';
import config from '../config';
import async from 'async';
import _ from 'lodash';
import crypto from 'crypto';
import nodemailer from 'nodemailer';

const auth = new CheckAuth();

class AuthCtrl {
    constructor() {}

    login(req, res, next) {
        var token = auth.signToken(req.user._id);
        console.log(token);
        if (token) {
            res.json({
                userId: req.user._id,
                isAuthenticated: true,
                token: token
            });
        }
    }
    register(req, res, next) {
        var newUser = new User(req.body);
        newUser.save(function(err, user) {
            if (err) {
                console.log(err);
                return next(err);
            }
            var token = auth.signToken(user._id);
            res.json({
                token: token
            });
        });
    }
    forgotPassword(req, res, next) {
        async.waterfall(
            [
                done => {
                    crypto.randomBytes(20, (err, buf) => {
                        var token = buf.toString('hex');
                        done(err, token);
                    });
                },
                (token, done) => {
                    var user = req.user;
                    user.reset_password_token = token;
                    user.reset_password_expires = config.expireTime;
                    user.save(err => {
                        done(err, token, user);
                    });
                },
                (token, user) => {
                    var transporter = nodemailer.createTransport({
                        service: 'gmail',
                        host: 'smtp.gmail.com',
                        auth: {
                            user: 'tirgovatu.andreea@gmail.com',
                            pass: config.secrets.apiPass
                        }
                    });
                    var mailOptions = {
                        from: 'noreplay@test.comm',
                        to: 'tirgovatu.andreea@gmail.com',
                        subject: 'Password Reset',
                        text:
              'click here to reset password ' +
              config.appHost +
              '/#/reset/' +
              token
                    };

                    transporter.sendMail(mailOptions, (err, result) => {
                        if (err) {
                            return res
                                .status(err.code)
                                .send({
                                    message: err.message,
                                    err: err
                                })
                                .end();
                        }
                        res.json({
                            message: 'Email sent! Please verify your email address!'
                        });
                    });
                }
            ],
            err => {
                console.log(err);
                if (err) {
                    next(err);
                }
            }
        );
    }
    reset(req, res, next) {
        var newUser = _.merge(req.user, req.body);
        newUser.save((err, user) => {
            if (err) {
                next(err);
            }

            res.json(user.toJson());
        });
    }
}

export default AuthCtrl;
