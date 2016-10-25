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

exports.default = function (_ref) {
    var projectId = _ref.projectId;
    var keyFilename = _ref.keyFilename;
    var _ref$logger = _ref.logger;
    var logger = _ref$logger === undefined ? createFakeLogger() : _ref$logger;


    var language = _googleCloud2.default.language({
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

var _googleCloud = require('google-cloud');

var _googleCloud2 = _interopRequireDefault(_googleCloud);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var createFakeLogger = function createFakeLogger() {
    return { error: function error() {
            return null;
        } };
};