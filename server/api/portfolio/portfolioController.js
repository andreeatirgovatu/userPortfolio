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
    payNow(req, res, next) {
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
            if (error) next(error);
            if (!payment) {
                res.status(404).send({ message: 'Payment not found!' });
            } else if (payment.payer.payment_method === 'paypal') {
                res.status(201).send(payment);
            }
        });
    }
    execute(req, res, next) {
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
                    next(error);
                } else {
                    res.status(200).send(payment);
                }
            }
        );
    }
    createPortfolio(req, res, next) {
        let portfolio = new Portfolio(req.body);
        portfolio.save((err, files) => {
            if (err) next(err);
            res.status(201).send(files);
        });
    }
    portfolioImages(req, res, next) {
        Portfolio.find({ userId: req.params.userId }, (err, files) => {
            if (err) next(err);
            res.status(200).send(files);
        });
    }

    updatePortfolio(req, res, next) {
        Portfolio.findOne(
            { _id: req.params.portfolioId, userId: req.params.userId },
            (err, portfolio) => {
                if (err) next(err);

                if (!portfolio) {
                    res.send(404, { message: 'Portfolio not found!' });
                } else if (portfolio) {
                    portfolio.files = portfolio.files.concat(req.body.files);
                    portfolio.save((err, portfolio) => {
                        if (err) next(err);
                        res.status(201).send(portfolio);
                    });
                }
            }
        );
    }

    portfolioNames(req, res, next) {
        Portfolio.find({ userId: req.params.userId }, (err, files) => {
            if (err) next(err);
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
                res.status(200).send(portfolioName);
            }
        });
    }
    deletePortfolio(req, res, next) {
        Portfolio.remove(
            {
                userId: req.params.userId
            },
            (err, user) => {
                if (err) next(err);
                res.status(204).send({ message: 'Portfolio successfully deleted' });
            }
        );
    }
    deleteImage(req, res, next) {
        Portfolio.findById(
            {
                _id: req.params.portfolioId,
                userId: req.params.userId
            },
            (err, portfolio) => {
                if (err) next(err);
                portfolio.files.id(req.params.imageId).remove();
                portfolio.save((err, portfolio) => {
                    if (err) next(err);
                    res.status(204).send(portfolio);
                });
            }
        );
    }
    imagesFromPortfolio(req, res, next) {
        Portfolio.findOne(
            { _id: req.params.portfolioId, userId: req.params.userId },
            (err, images) => {
                if (err) next(err);
                res.status(200).send(images);
            }
        );
    }
}

export default PortfolioCtrl;
