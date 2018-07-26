import config from '../../config';
import Portfolio from './portfolioModel';
import paypal from 'paypal-rest-sdk';

class PortfolioCtrl {
    constructor() {
        paypal.configure({
            host: 'api.sandbox.paypal.com',
            port: '',
            client_id:
        'ASM3Mhh3ymQh2ncJZfa7xXmn9LR5lypwiPI3XNZsWsq3bDjNKQCd72KoVtZqbNcIW-avt1Cz3x8qS7fO',
            client_secret:
        'EIohBWnfcxM_MeaG2-VpI9yqlpkXJliWmnCrPZ7PCVfEmizZGxsz4eSbbxM6PW8zzR7ctuZDIGC0Le44'
        });
    }

    params(req, res, next, id) {
        Portfolio.findById(id)
            .exec()
            .then(
                portfolio => {
                    if (!portfolio) {
                        next(new Error('No portfolio with that id'));
                    } else {
                        req.portfolio = portfolio;
                        next();
                    }
                },
                err => {
                    next(err);
                }
            );
    }
    pay_now(req, res) {
        const create_payment_json = {
            intent: 'authorize',
            payer: {
                payment_method: 'paypal'
            },
            redirect_urls: {
                return_url: config.localhost + '/paypal/success',
                cancel_url: config.localhost + '/paypal/cancel'
            },
            transactions: [
                {
                    item_list: {
                        items: [
                            {
                                name: req.body.product.portfolioName,
                                sku: req.body.product._id + 'sku',
                                price: req.body.product.price,
                                currency: 'USD',
                                quantity: 1
                            }
                        ]
                    },
                    amount: {
                        currency: 'USD',
                        total: req.body.product.price
                    },
                    description: req.body.product.portfolioName
                }
            ]
        };
        paypal.payment.create(create_payment_json, (error, payment) => {
            if (error) throw error;
            if (!payment) {
                res.send(404, { message: 'Payment not found!' });
            } else if (payment.payer.payment_method === 'paypal') {
                res.json(payment);
            }
        });
    }
    execute(req, res) {
        const payerId = req.query.PayerID;
        const paymentId = req.query.paymentId;
        let execute_payment_json = {
            payer_id: payerId,
            transactions: [
                {
                    amount: {
                        currency: 'USD',
                        total: '2.00'
                    }
                }
            ]
        };
        paypal.payment.execute(
            paymentId,
            execute_payment_json,
            (error, payment) => {
                if (error) {
                    throw error;
                } else {
                    res.json(payment);
                }
            }
        );
    }
    create_portfolio(req, res) {
        let portfolio = new Portfolio(req.body);
        portfolio.save((err, files) => {
            if (err) res.send(err);
            res.json(files);
        });
    }
    portfolio_images_for_a_user(req, res) {
        Portfolio.find({ userId: req.params.userId }, (err, files) => {
            if (err) res.send(err);
            res.json(files);
        });
    }
    update_portfolio(req, res) {
        Portfolio.findOne(
            { _id: req.params.portfolioId, userId: req.params.userId },
            (err, portfolio) => {
                if (err) throw err;

                if (!portfolio) {
                    res.send(404, { message: 'Portfolio not found!' });
                } else if (portfolio) {
                    portfolio.files = portfolio.files.concat(req.body.files);
                    portfolio.save((err, portfolio) => {
                        if (err) res.send(err);
                        res.json(portfolio);
                    });
                }
            }
        );
    }
    list_all_portfolios(req, res) {
        Portfolio.find({ userId: req.params.userId }, (err, files) => {
            if (err) res.send(err);
            if (files) {
                let portfolioName = files
                    .map((value, index) => {
                        if (value.portfolioName) {
                            return { id: value._id, name: value.portfolioName };
                        }
                    })
                    .filter((value, index) => {
                        return value;
                    });
                res.json(portfolioName);
            }
        });
    }
    delete_a_portfolio_by_userId_for_a_user(req, res) {
        Portfolio.remove(
            {
                userId: req.params.userId
            },
            (err, user) => {
                if (err) res.send(err);
                res.json({ message: 'Portfolio successfully deleted' });
            }
        );
    }
    delete_a_image_by_imageId_for_a_user(req, res) {
        Portfolio.findById(
            {
                _id: req.params.portfolioId,
                userId: req.params.userId
            },
            (err, portfolio) => {
                if (err) throw err;
                portfolio.files.id(req.params.imageId).remove();
                portfolio.save((err, portfolio) => {
                    if (err) res.send(err);
                    res.json(portfolio);
                });
            }
        );
    }
    images_from_a_portfolio(req, res) {
        Portfolio.findOne(
            { _id: req.params.portfolioId, userId: req.params.userId },
            (err, images) => {
                if (err) res.send(err);
                res.json(images);
            }
        );
    }
    list_all_users(req, res) {
        User.find({}, (err, user) => {
            if (err) res.send(err);
            res.json(user);
        });
    }
}

export default PortfolioCtrl;
