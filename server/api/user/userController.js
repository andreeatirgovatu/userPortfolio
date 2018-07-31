import User from './userModel';
import _ from 'lodash';
import fs from 'fs';
import path from 'path';
import url from 'url';

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
  getAllUsers(req, res, next) {
    User.find({})
      .select('-password')
      .exec()
      .then(
        users => {
          res.status(200).send(
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
  readUser(req, res, next) {
    console.log(req.user);
    delete req.user.reset_password_expires;
    delete req.user.reset_password_token;
    res.status(200).send(req.user.toJson());
  }
  updateUser(req, res, next) {
    let user = _.merge(req.user, req.body);
    user.save((err, saved) => {
      if (err) {
        next(err);
      } else {
        res.status(201).send(saved.toJson());
      }
    });
  }
  deleteUser(req, res, next) {
    req.user.remove((err, removed) => {
      if (err) {
        next(err);
      } else {
        res.status(204).send(removed.toJson());
      }
    });
  }
  imageProfile(req, res, next) {
    res.status(200).send(req.user.file);
  }
}

export default UserCtrl;
