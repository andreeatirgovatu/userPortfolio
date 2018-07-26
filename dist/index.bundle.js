module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _config = __webpack_require__(/*! ./server/config */ \"./server/config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _server = __webpack_require__(/*! ./server/server */ \"./server/server.js\");\n\nvar _server2 = _interopRequireDefault(_server);\n\nvar _logger = __webpack_require__(/*! ./server/util/logger */ \"./server/util/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar logger = new _logger2.default();\n\n_server2.default.listen(_config2.default.port, 'localhost', function (error) {\n    return error ? logger.log(error) : logger.log('Listening at http://localhost:' + _config2.default.port);\n});\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./server/api/friend/friendController.js":
/*!***********************************************!*\
  !*** ./server/api/friend/friendController.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _friendModel = __webpack_require__(/*! ./friendModel */ \"./server/api/friend/friendModel.js\");\n\nvar _friendModel2 = _interopRequireDefault(_friendModel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar FriendCtrl = function () {\n    function FriendCtrl() {\n        _classCallCheck(this, FriendCtrl);\n    }\n\n    _createClass(FriendCtrl, [{\n        key: 'params',\n        value: function params(req, res, next, id) {\n            _friendModel2.default.findById(id).exec().then(function (friend) {\n                if (!friend) {\n                    next(new Error('No friend with that id'));\n                } else {\n                    req.friend = friend;\n                    next();\n                }\n            }, function (err) {\n                next(err);\n            });\n        }\n    }, {\n        key: 'remove_friend',\n        value: function remove_friend(req, res, next) {\n            req.friend.remove(function (err, removed) {\n                if (err) {\n                    next(err);\n                } else {\n                    res.json(removed);\n                }\n            });\n        }\n    }, {\n        key: 'remove_all_friends',\n        value: function remove_all_friends(req, res, next) {\n            _friendModel2.default.remove({\n                userId: req.params.userId\n            }, function (err, friends) {\n                if (err) next(err);\n                res.json({ message: 'Friend successfully deleted' });\n            });\n        }\n    }, {\n        key: 'add_friend',\n        value: function add_friend(req, res, next) {\n            var friend = new _friendModel2.default(req.body);\n            friend.save(function (err, list) {\n                if (err) return next(err);\n                res.json(list);\n            });\n        }\n    }, {\n        key: 'get_added_friends',\n        value: function get_added_friends(req, res, next) {\n            _friendModel2.default.find({}).exec().then(function (friends) {\n                res.json(friends);\n            }, function (err) {\n                next(err);\n            });\n        }\n    }, {\n        key: 'get_friend',\n        value: function get_friend(req, res, next) {\n            res.json(req.friend);\n        }\n    }]);\n\n    return FriendCtrl;\n}();\n\nexports.default = FriendCtrl;\n\n//# sourceURL=webpack:///./server/api/friend/friendController.js?");

/***/ }),

/***/ "./server/api/friend/friendModel.js":
/*!******************************************!*\
  !*** ./server/api/friend/friendModel.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FriendSchema = new _mongoose2.default.Schema({\n    email: { type: String, required: true },\n    occupation: { type: String, required: true },\n    firstName: { type: String, required: true },\n    lastName: { type: String, required: true },\n    file: { type: String, required: true },\n    status: { type: Boolean, required: true },\n    userId: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'User' },\n    portfolioId: [{ type: _mongoose2.default.Schema.Types.ObjectId, ref: 'Portfolio' }]\n});\n\nexports.default = _mongoose2.default.model('Friend', FriendSchema);\n\n//# sourceURL=webpack:///./server/api/friend/friendModel.js?");

/***/ }),

/***/ "./server/api/friend/friendRoutes.js":
/*!*******************************************!*\
  !*** ./server/api/friend/friendRoutes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _auth = __webpack_require__(/*! ../../auth/auth */ \"./server/auth/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _friendController = __webpack_require__(/*! ./friendController */ \"./server/api/friend/friendController.js\");\n\nvar _friendController2 = _interopRequireDefault(_friendController);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar auth = new _auth2.default();\nvar controller = new _friendController2.default();\nvar checkUser = [auth.decodeToken(), auth.getFreshUser()];\nvar friendsRouter = (0, _express.Router)();\n\nfriendsRouter.route('/:userId').get(checkUser, controller.get_added_friends).post(checkUser, controller.add_friend).delete(checkUser, controller.remove_all_friends);\n\nfriendsRouter.param('friendId', controller.params);\nfriendsRouter.route('/:friendId/:userId').get(checkUser, controller.get_friend).delete(checkUser, controller.remove_friend);\n\nexports.default = friendsRouter;\n\n//# sourceURL=webpack:///./server/api/friend/friendRoutes.js?");

/***/ }),

/***/ "./server/api/index.js":
/*!*****************************!*\
  !*** ./server/api/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _friendRoutes = __webpack_require__(/*! ./friend/friendRoutes */ \"./server/api/friend/friendRoutes.js\");\n\nvar _friendRoutes2 = _interopRequireDefault(_friendRoutes);\n\nvar _userRoutes = __webpack_require__(/*! ./user/userRoutes */ \"./server/api/user/userRoutes.js\");\n\nvar _userRoutes2 = _interopRequireDefault(_userRoutes);\n\nvar _routes = __webpack_require__(/*! ../auth/routes */ \"./server/auth/routes.js\");\n\nvar _routes2 = _interopRequireDefault(_routes);\n\nvar _portfolioRoutes = __webpack_require__(/*! ./portfolio/portfolioRoutes */ \"./server/api/portfolio/portfolioRoutes.js\");\n\nvar _portfolioRoutes2 = _interopRequireDefault(_portfolioRoutes);\n\nvar _paypalRoutes = __webpack_require__(/*! ./paypal/paypalRoutes */ \"./server/api/paypal/paypalRoutes.js\");\n\nvar _paypalRoutes2 = _interopRequireDefault(_paypalRoutes);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar router = (0, _express.Router)();\n\nrouter.use('/friends', _friendRoutes2.default);\nrouter.use('/users', _userRoutes2.default);\nrouter.use('/auth', _routes2.default);\nrouter.use('/portfolio', _portfolioRoutes2.default);\nrouter.use('/paypal', _paypalRoutes2.default);\n\nexports.default = router;\n\n//# sourceURL=webpack:///./server/api/index.js?");

/***/ }),

/***/ "./server/api/paypal/paypalRoutes.js":
/*!*******************************************!*\
  !*** ./server/api/paypal/paypalRoutes.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _portfolioController = __webpack_require__(/*! ../portfolio/portfolioController */ \"./server/api/portfolio/portfolioController.js\");\n\nvar _portfolioController2 = _interopRequireDefault(_portfolioController);\n\nvar _config = __webpack_require__(/*! ../../config */ \"./server/config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar portfolioCtrl = new _portfolioController2.default();\nvar paypalRouter = (0, _express.Router)();\n\nvar ensureAuthorized = function ensureAuthorized(req, res, next) {\n    var bearerHeader = req.headers.authorization;\n    if (bearerHeader) {\n        var bearerToken = bearerHeader.split(' ');\n        if (bearerToken.length === 2) {\n            _jsonwebtoken2.default.verify(bearerToken[1], _config2.default.secrets.jwtSecret, function (error, decodedToken) {\n                if (error) {\n                    return res.status(401).send({ success: false, error: 'Invalid authorization token' });\n                }\n                if (decodedToken.exp > new Date().getTime()) {\n                    return res.status(400).send({ success: false, error: 'Token expired!' });\n                }\n                req.decodedToken = decodedToken;\n                next();\n            });\n        }\n    } else {\n        res.status(401).send({ success: false, error: 'An authorization header is required' });\n    }\n};\n\npaypalRouter.route('/:userId').post(ensureAuthorized, portfolioCtrl.pay_now);\n\npaypalRouter.route('/success').get(portfolioCtrl.execute);\n\nexports.default = paypalRouter;\n\n//# sourceURL=webpack:///./server/api/paypal/paypalRoutes.js?");

/***/ }),

/***/ "./server/api/portfolio/portfolioController.js":
/*!*****************************************************!*\
  !*** ./server/api/portfolio/portfolioController.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _config = __webpack_require__(/*! ../../config */ \"./server/config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _portfolioModel = __webpack_require__(/*! ./portfolioModel */ \"./server/api/portfolio/portfolioModel.js\");\n\nvar _portfolioModel2 = _interopRequireDefault(_portfolioModel);\n\nvar _paypalRestSdk = __webpack_require__(/*! paypal-rest-sdk */ \"paypal-rest-sdk\");\n\nvar _paypalRestSdk2 = _interopRequireDefault(_paypalRestSdk);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar PortfolioCtrl = function () {\n    function PortfolioCtrl() {\n        _classCallCheck(this, PortfolioCtrl);\n\n        _paypalRestSdk2.default.configure({\n            host: 'api.sandbox.paypal.com',\n            port: '',\n            client_id: 'ASM3Mhh3ymQh2ncJZfa7xXmn9LR5lypwiPI3XNZsWsq3bDjNKQCd72KoVtZqbNcIW-avt1Cz3x8qS7fO',\n            client_secret: 'EIohBWnfcxM_MeaG2-VpI9yqlpkXJliWmnCrPZ7PCVfEmizZGxsz4eSbbxM6PW8zzR7ctuZDIGC0Le44'\n        });\n    }\n\n    _createClass(PortfolioCtrl, [{\n        key: 'params',\n        value: function params(req, res, next, id) {\n            _portfolioModel2.default.findById(id).exec().then(function (portfolio) {\n                if (!portfolio) {\n                    next(new Error('No portfolio with that id'));\n                } else {\n                    req.portfolio = portfolio;\n                    next();\n                }\n            }, function (err) {\n                next(err);\n            });\n        }\n    }, {\n        key: 'pay_now',\n        value: function pay_now(req, res) {\n            var create_payment_json = {\n                intent: 'authorize',\n                payer: {\n                    payment_method: 'paypal'\n                },\n                redirect_urls: {\n                    return_url: _config2.default.localhost + '/paypal/success',\n                    cancel_url: _config2.default.localhost + '/paypal/cancel'\n                },\n                transactions: [{\n                    item_list: {\n                        items: [{\n                            name: req.body.product.portfolioName,\n                            sku: req.body.product._id + 'sku',\n                            price: req.body.product.price,\n                            currency: 'USD',\n                            quantity: 1\n                        }]\n                    },\n                    amount: {\n                        currency: 'USD',\n                        total: req.body.product.price\n                    },\n                    description: req.body.product.portfolioName\n                }]\n            };\n            _paypalRestSdk2.default.payment.create(create_payment_json, function (error, payment) {\n                if (error) throw error;\n                if (!payment) {\n                    res.send(404, { message: 'Payment not found!' });\n                } else if (payment.payer.payment_method === 'paypal') {\n                    res.json(payment);\n                }\n            });\n        }\n    }, {\n        key: 'execute',\n        value: function execute(req, res) {\n            var payerId = req.query.PayerID;\n            var paymentId = req.query.paymentId;\n            var execute_payment_json = {\n                payer_id: payerId,\n                transactions: [{\n                    amount: {\n                        currency: 'USD',\n                        total: '2.00'\n                    }\n                }]\n            };\n            _paypalRestSdk2.default.payment.execute(paymentId, execute_payment_json, function (error, payment) {\n                if (error) {\n                    throw error;\n                } else {\n                    res.json(payment);\n                }\n            });\n        }\n    }, {\n        key: 'create_portfolio',\n        value: function create_portfolio(req, res) {\n            var portfolio = new _portfolioModel2.default(req.body);\n            portfolio.save(function (err, files) {\n                if (err) res.send(err);\n                res.json(files);\n            });\n        }\n    }, {\n        key: 'portfolio_images_for_a_user',\n        value: function portfolio_images_for_a_user(req, res) {\n            _portfolioModel2.default.find({ userId: req.params.userId }, function (err, files) {\n                if (err) res.send(err);\n                res.json(files);\n            });\n        }\n    }, {\n        key: 'update_portfolio',\n        value: function update_portfolio(req, res) {\n            _portfolioModel2.default.findOne({ _id: req.params.portfolioId, userId: req.params.userId }, function (err, portfolio) {\n                if (err) throw err;\n\n                if (!portfolio) {\n                    res.send(404, { message: 'Portfolio not found!' });\n                } else if (portfolio) {\n                    portfolio.files = portfolio.files.concat(req.body.files);\n                    portfolio.save(function (err, portfolio) {\n                        if (err) res.send(err);\n                        res.json(portfolio);\n                    });\n                }\n            });\n        }\n    }, {\n        key: 'list_all_portfolios',\n        value: function list_all_portfolios(req, res) {\n            _portfolioModel2.default.find({ userId: req.params.userId }, function (err, files) {\n                if (err) res.send(err);\n                if (files) {\n                    var portfolioName = files.map(function (value, index) {\n                        if (value.portfolioName) {\n                            return { id: value._id, name: value.portfolioName };\n                        }\n                    }).filter(function (value, index) {\n                        return value;\n                    });\n                    res.json(portfolioName);\n                }\n            });\n        }\n    }, {\n        key: 'delete_a_portfolio_by_userId_for_a_user',\n        value: function delete_a_portfolio_by_userId_for_a_user(req, res) {\n            _portfolioModel2.default.remove({\n                userId: req.params.userId\n            }, function (err, user) {\n                if (err) res.send(err);\n                res.json({ message: 'Portfolio successfully deleted' });\n            });\n        }\n    }, {\n        key: 'delete_a_image_by_imageId_for_a_user',\n        value: function delete_a_image_by_imageId_for_a_user(req, res) {\n            _portfolioModel2.default.findById({\n                _id: req.params.portfolioId,\n                userId: req.params.userId\n            }, function (err, portfolio) {\n                if (err) throw err;\n                portfolio.files.id(req.params.imageId).remove();\n                portfolio.save(function (err, portfolio) {\n                    if (err) res.send(err);\n                    res.json(portfolio);\n                });\n            });\n        }\n    }, {\n        key: 'images_from_a_portfolio',\n        value: function images_from_a_portfolio(req, res) {\n            _portfolioModel2.default.findOne({ _id: req.params.portfolioId, userId: req.params.userId }, function (err, images) {\n                if (err) res.send(err);\n                res.json(images);\n            });\n        }\n    }, {\n        key: 'list_all_users',\n        value: function list_all_users(req, res) {\n            User.find({}, function (err, user) {\n                if (err) res.send(err);\n                res.json(user);\n            });\n        }\n    }]);\n\n    return PortfolioCtrl;\n}();\n\nexports.default = PortfolioCtrl;\n\n//# sourceURL=webpack:///./server/api/portfolio/portfolioController.js?");

/***/ }),

/***/ "./server/api/portfolio/portfolioModel.js":
/*!************************************************!*\
  !*** ./server/api/portfolio/portfolioModel.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar FilesSchema = new _mongoose2.default.Schema({\n    path: { type: String, required: true },\n    price: { type: String, required: true },\n    createdAt: { type: Date, required: true }\n});\nvar PortfolioSchema = new _mongoose2.default.Schema({\n    userId: { type: _mongoose2.default.Schema.Types.ObjectId, ref: 'User' },\n    portfolioName: { type: String, required: true },\n    files: [FilesSchema]\n});\n\nexports.default = _mongoose2.default.model('Portfolio', PortfolioSchema);\n\n//# sourceURL=webpack:///./server/api/portfolio/portfolioModel.js?");

/***/ }),

/***/ "./server/api/portfolio/portfolioRoutes.js":
/*!*************************************************!*\
  !*** ./server/api/portfolio/portfolioRoutes.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _auth = __webpack_require__(/*! ../../auth/auth */ \"./server/auth/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _portfolioController = __webpack_require__(/*! ./portfolioController */ \"./server/api/portfolio/portfolioController.js\");\n\nvar _portfolioController2 = _interopRequireDefault(_portfolioController);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar controller = new _portfolioController2.default();\nvar auth = new _auth2.default();\nvar checkUser = [auth.decodeToken(), auth.getFreshUser()];\nvar portfolioRouter = (0, _express.Router)();\n\nportfolioRouter.route('/:userId/list').get(checkUser, controller.list_all_portfolios);\n\nportfolioRouter.route('/:userId').get(checkUser, controller.portfolio_images_for_a_user).post(checkUser, controller.create_portfolio).delete(checkUser, controller.delete_a_portfolio_by_userId_for_a_user);\n\nportfolioRouter.param('portfolioId', controller.params);\nportfolioRouter.route('/:portfolioId/:userId').get(checkUser, controller.images_from_a_portfolio).put(checkUser, controller.update_portfolio);\n\nportfolioRouter.route('/:imageId/:portfolioId/:userId').delete(checkUser, controller.delete_a_image_by_imageId_for_a_user);\n\nexports.default = portfolioRouter;\n\n//# sourceURL=webpack:///./server/api/portfolio/portfolioRoutes.js?");

/***/ }),

/***/ "./server/api/user/userController.js":
/*!*******************************************!*\
  !*** ./server/api/user/userController.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _userModel = __webpack_require__(/*! ./userModel */ \"./server/api/user/userModel.js\");\n\nvar _userModel2 = _interopRequireDefault(_userModel);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar UserCtrl = function () {\n    function UserCtrl() {\n        _classCallCheck(this, UserCtrl);\n    }\n\n    _createClass(UserCtrl, [{\n        key: 'params',\n        value: function params(req, res, next, id) {\n            _userModel2.default.findById(id).select('-password').exec().then(function (user) {\n                if (!user) {\n                    next(new Error('No user with that id'));\n                } else {\n                    req.user = user;\n                    next();\n                }\n            }, function (err) {\n                next(err);\n            });\n        }\n    }, {\n        key: 'get_all_users',\n        value: function get_all_users(req, res, next) {\n            _userModel2.default.find({}).select('-password').exec().then(function (users) {\n                res.json(users.map(function (user) {\n                    return user.toJson();\n                }));\n            }, function (err) {\n                next(err);\n            });\n        }\n    }, {\n        key: 'read_a_user',\n        value: function read_a_user(req, res, next) {\n            delete req.user.reset_password_expires;\n            delete req.user.reset_password_token;\n            res.json(req.user.toJson());\n        }\n    }, {\n        key: 'update_a_user',\n        value: function update_a_user(req, res, next) {\n            var user = _lodash2.default.merge(req.user, req.body);\n            user.save(function (err, saved) {\n                if (err) {\n                    next(err);\n                } else {\n                    res.json(saved.toJson());\n                }\n            });\n        }\n    }, {\n        key: 'delete_a_user',\n        value: function delete_a_user(req, res, next) {\n            req.user.remove(function (err, removed) {\n                if (err) {\n                    next(err);\n                } else {\n                    res.json(removed.toJson());\n                }\n            });\n        }\n    }, {\n        key: 'image_profile',\n        value: function image_profile(req, res, next) {\n            res.json(req.user.file);\n        }\n    }]);\n\n    return UserCtrl;\n}();\n\nexports.default = UserCtrl;\n\n//# sourceURL=webpack:///./server/api/user/userController.js?");

/***/ }),

/***/ "./server/api/user/userModel.js":
/*!**************************************!*\
  !*** ./server/api/user/userModel.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _bcryptjs = __webpack_require__(/*! bcryptjs */ \"bcryptjs\");\n\nvar _bcryptjs2 = _interopRequireDefault(_bcryptjs);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar SALT_WORK_FACTOR = 10;\n\nvar UserSchema = new _mongoose2.default.Schema({\n    firstName: String,\n    lastName: String,\n    email: { type: String, required: true, unique: true },\n    file: { type: String, required: true },\n    occupation: String,\n    password: { type: String, required: true },\n    reset_password_token: String,\n    reset_password_expires: Date\n});\n\n//TODO arraw function; at the moment mongoose is not working with it\nUserSchema.pre('save', function (next) {\n    var user = this;\n    // only hash the password if it has been modified (or is new)\n    if (!user.isModified('password')) return next();\n\n    user.password = user.encryptPassword(user.password);\n    next();\n});\n\nUserSchema.methods = {\n    // check the passwords on signin\n    authenticate: function authenticate(plainTextPass) {\n        return _bcryptjs2.default.compareSync(plainTextPass, this.password);\n    },\n    // hash the passwords\n    encryptPassword: function encryptPassword(plainTextPass) {\n        if (!plainTextPass) {\n            return '';\n        } else {\n            var salt = _bcryptjs2.default.genSaltSync(SALT_WORK_FACTOR);\n            return _bcryptjs2.default.hashSync(plainTextPass, salt);\n        }\n    },\n\n    toJson: function toJson() {\n        var obj = this.toObject();\n        delete obj.password;\n        return obj;\n    }\n};\nvar user = _mongoose2.default.model('User', UserSchema);\nexports.default = user;\n\n//# sourceURL=webpack:///./server/api/user/userModel.js?");

/***/ }),

/***/ "./server/api/user/userRoutes.js":
/*!***************************************!*\
  !*** ./server/api/user/userRoutes.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _auth = __webpack_require__(/*! ../../auth/auth */ \"./server/auth/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _userController = __webpack_require__(/*! ./userController */ \"./server/api/user/userController.js\");\n\nvar _userController2 = _interopRequireDefault(_userController);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar controller = new _userController2.default();\nvar auth = new _auth2.default();\nvar checkUser = [auth.decodeToken(), auth.getFreshUser()];\nvar usersRouter = (0, _express.Router)();\n\nusersRouter.param('userId', controller.params);\n\nusersRouter.route('/').get(checkUser, controller.get_all_users);\n\nusersRouter.route('/:userId').get(checkUser, controller.read_a_user).put(checkUser, controller.update_a_user).delete(checkUser, controller.delete_a_user);\n\nusersRouter.route('/image/:userId').get(checkUser, controller.image_profile);\n\nexports.default = usersRouter;\n\n//# sourceURL=webpack:///./server/api/user/userRoutes.js?");

/***/ }),

/***/ "./server/auth/auth.js":
/*!*****************************!*\
  !*** ./server/auth/auth.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _expressJwt = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n\nvar _expressJwt2 = _interopRequireDefault(_expressJwt);\n\nvar _config = __webpack_require__(/*! ../config */ \"./server/config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _userModel = __webpack_require__(/*! ../api/user/userModel */ \"./server/api/user/userModel.js\");\n\nvar _userModel2 = _interopRequireDefault(_userModel);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar checkToken = (0, _expressJwt2.default)({ secret: _config2.default.secrets.jwtSecret });\n\nvar CheckAuth = function () {\n    function CheckAuth() {\n        _classCallCheck(this, CheckAuth);\n    }\n\n    _createClass(CheckAuth, [{\n        key: 'decodeToken',\n        value: function decodeToken() {\n            return function (req, res, next) {\n                if (req.query && req.query.hasOwnProperty('access_token')) {\n                    req.headers.authorization = 'Bearer ' + req.query.access_token;\n                }\n                checkToken(req, res, next);\n            };\n        }\n    }, {\n        key: 'getFreshUser',\n        value: function getFreshUser() {\n            return function (req, res, next) {\n                _userModel2.default.findById(req.user._id).then(function (user) {\n                    if (!user) {\n                        res.status(401).send({ message: 'Unauthorized' });\n                    } else {\n                        req.user = user;\n                        next();\n                    }\n                }, function (err) {\n                    next(err);\n                });\n            };\n        }\n    }, {\n        key: 'checkUserByEmail',\n        value: function checkUserByEmail() {\n            return function (req, res, next) {\n                var email = req.body.email;\n\n                if (!email) {\n                    res.status(400).send({ message: 'You need a email' });\n                    return;\n                }\n\n                _userModel2.default.findOne({ email: email }).then(function (user) {\n                    if (!user) {\n                        res.status(404).send({ message: 'No user with the given email' });\n                    } else {\n                        req.user = user;\n                        next();\n                    }\n                }, function (err) {\n                    next(err);\n                });\n            };\n        }\n    }, {\n        key: 'checkUserByToken',\n        value: function checkUserByToken() {\n            return function (req, res, next) {\n                var token = req.params.token;\n\n                if (!token) {\n                    res.status(400).send({ message: 'You need a token' });\n                    return;\n                }\n                _userModel2.default.findOne({ reset_password_token: token }).then(function (user) {\n                    if (!user) {\n                        res.status(404).send({ message: 'User not found!' });\n                    } else {\n                        req.user = user;\n                        next();\n                    }\n                }, function (err) {\n                    next(err);\n                });\n            };\n        }\n    }, {\n        key: 'verifyUser',\n        value: function verifyUser() {\n            return function (req, res, next) {\n                var email = req.body.email;\n                var password = req.body.password;\n                console.log(req.body);\n                if (!email || !password) {\n                    res.status(500).send({ message: 'You need an email and password' });\n                    return;\n                }\n\n                _userModel2.default.findOne({ email: email }).then(function (user) {\n                    if (!user) {\n                        res.status(404).send({ message: 'No user with the given email' });\n                    } else {\n                        if (!user.authenticate(password)) {\n                            res.status(401).send({ message: 'Wrong password' });\n                        } else {\n                            req.user = user;\n                            next();\n                        }\n                    }\n                }, function (err) {\n                    next(err);\n                });\n            };\n        }\n    }, {\n        key: 'signToken',\n        value: function signToken(id) {\n            return _jsonwebtoken2.default.sign({ _id: id }, _config2.default.secrets.jwtSecret, {\n                expiresIn: _config2.default.expireTime\n            });\n        }\n    }]);\n\n    return CheckAuth;\n}();\n\nexports.default = CheckAuth;\n\n//# sourceURL=webpack:///./server/auth/auth.js?");

/***/ }),

/***/ "./server/auth/controller.js":
/*!***********************************!*\
  !*** ./server/auth/controller.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _userModel = __webpack_require__(/*! ../api/user/userModel */ \"./server/api/user/userModel.js\");\n\nvar _userModel2 = _interopRequireDefault(_userModel);\n\nvar _auth = __webpack_require__(/*! ./auth */ \"./server/auth/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _config = __webpack_require__(/*! ../config */ \"./server/config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _async = __webpack_require__(/*! async */ \"async\");\n\nvar _async2 = _interopRequireDefault(_async);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _crypto = __webpack_require__(/*! crypto */ \"crypto\");\n\nvar _crypto2 = _interopRequireDefault(_crypto);\n\nvar _nodemailer = __webpack_require__(/*! nodemailer */ \"nodemailer\");\n\nvar _nodemailer2 = _interopRequireDefault(_nodemailer);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar auth = new _auth2.default();\n\nvar AuthCtrl = function () {\n    function AuthCtrl() {\n        _classCallCheck(this, AuthCtrl);\n    }\n\n    _createClass(AuthCtrl, [{\n        key: 'login',\n        value: function login(req, res, next) {\n            var token = auth.signToken(req.user._id);\n            console.log(token);\n            if (token) {\n                res.json({\n                    userId: req.user._id,\n                    isAuthenticated: true,\n                    token: token\n                });\n            }\n        }\n    }, {\n        key: 'register',\n        value: function register(req, res, next) {\n            var newUser = new _userModel2.default(req.body);\n            newUser.save(function (err, user) {\n                if (err) {\n                    console.log(err);\n                    return next(err);\n                }\n                var token = auth.signToken(user._id);\n                res.json({\n                    token: token\n                });\n            });\n        }\n    }, {\n        key: 'forgotPassword',\n        value: function forgotPassword(req, res, next) {\n            _async2.default.waterfall([function (done) {\n                _crypto2.default.randomBytes(20, function (err, buf) {\n                    var token = buf.toString('hex');\n                    done(err, token);\n                });\n            }, function (token, done) {\n                var user = req.user;\n                user.reset_password_token = token;\n                user.reset_password_expires = _config2.default.expireTime;\n                user.save(function (err) {\n                    done(err, token, user);\n                });\n            }, function (token, user) {\n                var transporter = _nodemailer2.default.createTransport({\n                    service: 'gmail',\n                    host: 'smtp.gmail.com',\n                    auth: {\n                        user: 'tirgovatu.andreea@gmail.com',\n                        pass: _config2.default.secrets.apiPass\n                    }\n                });\n                var mailOptions = {\n                    from: 'noreplay@test.comm',\n                    to: 'tirgovatu.andreea@gmail.com',\n                    subject: 'Password Reset',\n                    text: 'click here to reset password ' + _config2.default.appHost + '/#/reset/' + token\n                };\n\n                transporter.sendMail(mailOptions, function (err, result) {\n                    if (err) {\n                        return res.status(err.code).send({\n                            message: err.message,\n                            err: err\n                        }).end();\n                    }\n                    res.json({\n                        message: 'Email sent! Please verify your email address!'\n                    });\n                });\n            }], function (err) {\n                console.log(err);\n                if (err) {\n                    next(err);\n                }\n            });\n        }\n    }, {\n        key: 'reset',\n        value: function reset(req, res, next) {\n            var newUser = _lodash2.default.merge(req.user, req.body);\n            newUser.save(function (err, user) {\n                if (err) {\n                    next(err);\n                }\n\n                res.json(user.toJson());\n            });\n        }\n    }]);\n\n    return AuthCtrl;\n}();\n\nexports.default = AuthCtrl;\n\n//# sourceURL=webpack:///./server/auth/controller.js?");

/***/ }),

/***/ "./server/auth/routes.js":
/*!*******************************!*\
  !*** ./server/auth/routes.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _auth = __webpack_require__(/*! ./auth */ \"./server/auth/auth.js\");\n\nvar _auth2 = _interopRequireDefault(_auth);\n\nvar _controller = __webpack_require__(/*! ./controller */ \"./server/auth/controller.js\");\n\nvar _controller2 = _interopRequireDefault(_controller);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar auth = new _auth2.default();\nvar controller = new _controller2.default();\nvar authRouter = (0, _express.Router)();\n\nauthRouter.post('/login', auth.verifyUser(), controller.login);\nauthRouter.post('/forgot_password', auth.checkUserByEmail(), controller.forgotPassword);\nauthRouter.post('/reset/:token', auth.checkUserByToken(), controller.reset);\nauthRouter.post('/register', controller.register);\n\nexports.default = authRouter;\n\n//# sourceURL=webpack:///./server/auth/routes.js?");

/***/ }),

/***/ "./server/config sync recursive ^\\.\\/.*$":
/*!*************************************!*\
  !*** ./server/config sync ^\.\/.*$ ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./\": \"./server/config/index.js\",\n\t\"./development\": \"./server/config/development.js\",\n\t\"./development.js\": \"./server/config/development.js\",\n\t\"./index\": \"./server/config/index.js\",\n\t\"./index.js\": \"./server/config/index.js\",\n\t\"./production\": \"./server/config/production.js\",\n\t\"./production.js\": \"./server/config/production.js\",\n\t\"./testing\": \"./server/config/testing.js\",\n\t\"./testing.js\": \"./server/config/testing.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./server/config sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./server/config_sync_^\\.\\/.*$?");

/***/ }),

/***/ "./server/config/development.js":
/*!**************************************!*\
  !*** ./server/config/development.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar dev = {\n    logging: true,\n    database: 'mongodb://localhost/userProfileDB'\n};\nexports.default = dev;\n\n//# sourceURL=webpack:///./server/config/development.js?");

/***/ }),

/***/ "./server/config/index.js":
/*!********************************!*\
  !*** ./server/config/index.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar config = {\n    dev: 'development',\n    test: 'testing',\n    prod: 'production',\n    port: process.env.PORT || 4000,\n    localhost: 'http://localhost:' + (process.env.PORT || 4000),\n    appHost: 'http://localhost:5000',\n    secrets: {\n        jwtSecret: process.env.JWT_SECRET || 'test',\n        apiPass: 'glcfvjoyoxigtgfj'\n    },\n    expireTime: 24 * 60 * 10\n};\nconfig.env = \"development\" || config.dev;\n\nvar envConfig = void 0;\n// require could error out if\n// the file don't exist so lets try this statement\n// and fallback to an empty object if it does error out\ntry {\n    envConfig = __webpack_require__(\"./server/config sync recursive ^\\\\.\\\\/.*$\")(\"./\" + config.env);\n    envConfig = envConfig || {};\n} catch (e) {\n    envConfig = {};\n}\n\n// merge the two config files together\n// the envConfig file will overwrite properties\n// on the config object\nvar newConf = _lodash2.default.merge(config, envConfig);\n\nexports.default = newConf;\n\n//# sourceURL=webpack:///./server/config/index.js?");

/***/ }),

/***/ "./server/config/production.js":
/*!*************************************!*\
  !*** ./server/config/production.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar prod = {\n    logging: false\n};\nexports.default = prod;\n\n//# sourceURL=webpack:///./server/config/production.js?");

/***/ }),

/***/ "./server/config/testing.js":
/*!**********************************!*\
  !*** ./server/config/testing.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\nvar test = {\n    logging: false\n};\nexports.default = test;\n\n//# sourceURL=webpack:///./server/config/testing.js?");

/***/ }),

/***/ "./server/middleware/appMiddlware.js":
/*!*******************************************!*\
  !*** ./server/middleware/appMiddlware.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _cors = __webpack_require__(/*! cors */ \"cors\");\n\nvar _cors2 = _interopRequireDefault(_cors);\n\nvar _methodOverride = __webpack_require__(/*! method-override */ \"method-override\");\n\nvar _methodOverride2 = _interopRequireDefault(_methodOverride);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// setup global middlewares\nvar middleware = function middleware(app) {\n    // use morgan to log requests to the console\n    app.use((0, _morgan2.default)('dev'));\n    app.use(_bodyParser2.default.urlencoded({\n        extended: true\n    }));\n    app.use(_bodyParser2.default.json({\n        type: 'application/json',\n        limit: 52428800\n    }));\n    app.use((0, _cors2.default)());\n    app.use((0, _methodOverride2.default)());\n};\n\nexports.default = middleware;\n\n//# sourceURL=webpack:///./server/middleware/appMiddlware.js?");

/***/ }),

/***/ "./server/middleware/error.js":
/*!************************************!*\
  !*** ./server/middleware/error.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _logger = __webpack_require__(/*! ../util/logger */ \"./server/util/logger.js\");\n\nvar _logger2 = _interopRequireDefault(_logger);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar logger = new _logger2.default();\n\nvar error = function error(err, req, res, next) {\n    logger.log(err.status);\n    logger.log(err.stack);\n\n    switch (err.status) {\n        case 400:\n            res.status(400).send({ message: 'Bad Request' });\n            return;\n        case 401:\n            res.status(401).send({ message: 'Invalid token' });\n            return;\n        case 403:\n            res.status(403).send({ message: 'Forbidden' });\n            return;\n        case 404:\n            res.status(404).send({ message: 'Not found' });\n            return;\n        default:\n            res.status(500).send({ message: err.message });\n            return;\n    }\n};\n\nexports.default = error;\n\n//# sourceURL=webpack:///./server/middleware/error.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _api = __webpack_require__(/*! ./api */ \"./server/api/index.js\");\n\nvar _api2 = _interopRequireDefault(_api);\n\nvar _error = __webpack_require__(/*! ./middleware/error */ \"./server/middleware/error.js\");\n\nvar _error2 = _interopRequireDefault(_error);\n\nvar _config = __webpack_require__(/*! ./config */ \"./server/config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _appMiddlware = __webpack_require__(/*! ./middleware/appMiddlware */ \"./server/middleware/appMiddlware.js\");\n\nvar _appMiddlware2 = _interopRequireDefault(_appMiddlware);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\n\n// mongoose: connect to database\n_mongoose2.default.Promise = global.Promise;\n_mongoose2.default.connect(_config2.default.default.database, { useMongoClient: true });\n// setup the app middlware\n(0, _appMiddlware2.default)(app);\n\n// setup the api\napp.use('/api', _api2.default);\n\n// error middleware\napp.use(_error2.default);\n\nexports.default = app;\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./server/util/logger.js":
/*!*******************************!*\
  !*** ./server/util/logger.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n    value: true\n});\n\nvar _typeof = typeof Symbol === \"function\" && typeof Symbol.iterator === \"symbol\" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === \"function\" && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _colors = __webpack_require__(/*! colors */ \"colors\");\n\nvar _colors2 = _interopRequireDefault(_colors);\n\nvar _lodash = __webpack_require__(/*! lodash */ \"lodash\");\n\nvar _lodash2 = _interopRequireDefault(_lodash);\n\nvar _config = __webpack_require__(/*! ../config */ \"./server/config/index.js\");\n\nvar _config2 = _interopRequireDefault(_config);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\n// create a noop (no operation) function for when loggin is disabled\nvar noop = function noop() {};\n// check if loggin is enabled in the config\n// if it is, then use console.log\n// if not then noop\nvar consoleLog = _config2.default.default.logging ? console.log.bind(console) : noop;\n\nvar Logger = function () {\n    function Logger() {\n        _classCallCheck(this, Logger);\n    }\n\n    _createClass(Logger, [{\n        key: 'log',\n        value: function log() {\n            // arguments is an array like object with all the passed\n            // in arguments to this function\n            var args = _lodash2.default.toArray(arguments).map(function (arg) {\n                if ((typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) === 'object') {\n                    // turn the object to a string so we\n                    // can log all the properties and color it\n                    var string = JSON.stringify(arg, 2);\n                    return string.magenta;\n                } else {\n                    // coerce to string to color\n                    arg += '';\n                    return arg.magenta;\n                }\n            });\n\n            // call either console.log or noop here\n            // with the console object as the context\n            // and the new colored args :)\n            consoleLog.apply(console, args);\n        }\n    }]);\n\n    return Logger;\n}();\n\nexports.default = Logger;\n\n//# sourceURL=webpack:///./server/util/logger.js?");

/***/ }),

/***/ "async":
/*!************************!*\
  !*** external "async" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"async\");\n\n//# sourceURL=webpack:///external_%22async%22?");

/***/ }),

/***/ "bcryptjs":
/*!***************************!*\
  !*** external "bcryptjs" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcryptjs\");\n\n//# sourceURL=webpack:///external_%22bcryptjs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "colors":
/*!*************************!*\
  !*** external "colors" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"colors\");\n\n//# sourceURL=webpack:///external_%22colors%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "method-override":
/*!**********************************!*\
  !*** external "method-override" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"method-override\");\n\n//# sourceURL=webpack:///external_%22method-override%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "nodemailer":
/*!*****************************!*\
  !*** external "nodemailer" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"nodemailer\");\n\n//# sourceURL=webpack:///external_%22nodemailer%22?");

/***/ }),

/***/ "paypal-rest-sdk":
/*!**********************************!*\
  !*** external "paypal-rest-sdk" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"paypal-rest-sdk\");\n\n//# sourceURL=webpack:///external_%22paypal-rest-sdk%22?");

/***/ })

/******/ });