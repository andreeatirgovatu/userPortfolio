import Friend from './friendModel';

class FriendCtrl {
    constructor() {}

    params(req, res, next, id) {
        Friend.findById(id)
            .exec()
            .then(
                friend => {
                    if (!friend) {
                        next(new Error('No friend with that id'));
                    } else {
                        req.friend = friend;
                        next();
                    }
                },
                err => {
                    next(err);
                }
            );
    }

    remove_friend(req, res, next) {
        req.friend.remove((err, removed) => {
            if (err) {
                next(err);
            } else {
                res.status(204).send(removed);
            }
        });
    }

    remove_all_friends(req, res, next) {
        Friend.remove(
            {
                userId: req.params.userId
            },
            (err, friends) => {
                if (err) next(err);
                res.send(204).send(friends);
            }
        );
    }

    add_friend(req, res, next) {
        let friend = new Friend(req.body);
        friend.save((err, list) => {
            if (err) return next(err);
            res.status(201).send(list);
        });
    }

    get_added_friends(req, res, next) {
        Friend.find({})
            .exec()
            .then(
                friends => {
                    res.json(friends);
                },
                err => {
                    next(err);
                }
            );
    }

    get_friend(req, res, next) {
        res.status(200).send(req.friend);
    }
}

export default FriendCtrl;
