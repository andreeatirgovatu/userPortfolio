import User from '../api/user/userModel';
import CheckAuth from './auth';
import config from '../config';
import async from 'async';
import _ from 'lodash';
import crypto from 'crypto';
import nodemailer from 'nodemailer';
import multer from 'multer';

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    console.log('dest', file);
    cb(null, './uploads/');
  },
  filename: (req, file, cb) => {
    console.log('file', file);
    cb(null, Date.now() + '-' + file.originalname);
  }
});

const upload = multer({ storage: storage }).single('file');

const auth = new CheckAuth();

class AuthCtrl {
  constructor() {}

  login(req, res, next) {
    let token = auth.signToken(req.user._id);
    if (token) {
      res.json({
        userId: req.user._id,
        isAuthenticated: true,
        token: token
      });
    }
  }

  register(req, res, next) {
    upload(req, res, err => {
      if (err) {
        next(err);
      }
      console.log(req.file);
      req.body.file = _.last(req.file.path.split('\\'));
      console.log(req.body.file);
      let newUser = new User(req.body);

      newUser.save((err, user) => {
        if (err) {
          next(err);
        }
        var token = auth.signToken(user._id);
        res.json({
          token: token
        });
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
          let transporter = nodemailer.createTransport({
            service: 'gmail',
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            auth: {
              user: 'tirgovatu.andreea@gmail.com',
              pass: config.secrets.apiPass
            }
          });
          let mailOptions = {
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
              next(err);
            }
            res.json({
              message: 'Email sent! Please verify your email address!'
            });
          });
        }
      ],
      err => {
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
