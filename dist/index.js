'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.googleLanguageTunneling = undefined;

var _tunneling = require('./tunneling');

Object.defineProperty(exports, 'googleLanguageTunneling', {
    enumerable: true,
    get: function get() {
        return _interopRequireDefault(_tunneling).default;
    }
});

var _selectors = require('./selectors');

Object.keys(_selectors).forEach(function (key) {
    if (key === "default" || key === "__esModule") return;
    Object.defineProperty(exports, key, {
        enumerable: true,
        get: function get() {
            return _selectors[key];
        }
    });
});

exports.default = function (_ref) {
    var projectId = _ref.projectId,
        keyFilename = _ref.keyFilename,
        _ref$logger = _ref.logger,
        logger = _ref$logger === undefined ? createFakeLogger() : _ref$logger;


    var language = (0, _language2.default)({
        projectId: projectId,
        keyFilename: keyFilename
    });

    logger.debug('Google Cloud Natural Language connected to ' + projectId + ' project');

    return function () {
        return {
            annotate: function annotate(sentence, options) {
                return new Promise(function (next, reject) {
                    return language.annotate(sentence, options, function (err, result) {
                        if (err) {
                            logger.error(err);
                            reject(err);
                        }

                        next(result);
                    });
                });
            },

            detectEntities: function detectEntities(sentence, options) {
                return new Promise(function (next, reject) {
                    return language.detectEntities(sentence, options, function (err, result) {
                        if (err) {
                            logger.error(err);
                            reject(err);
                        }

                        next(result);
                    });
                });
            },

            detectSentiment: function detectSentiment(sentence) {
                return new Promise(function (next, reject) {
                    return language.detectEntities(sentence, function (err, result) {
                        if (err) {
                            logger.error(err);
                            reject(err);
                        }

                        next(result);
                    });
                });
            }
        };
    };
};

var _language = require('@google-cloud/language');

var _language2 = _interopRequireDefault(_language);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFakeLogger = function createFakeLogger() {
    return { error: function error() {
            return null;
        } };
};