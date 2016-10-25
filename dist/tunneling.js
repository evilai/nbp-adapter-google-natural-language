'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (googleNaturalLanguageClient) {
    return function (req, res, next) {
        if (!req.bot) {
            throw new Error('Field \'bot\' should be initialized in request object.');
        }

        if (!req.bot.normalized) {
            throw new Error('No normalized data in request object.');
        }

        req.bot.normalized.reduce(function (acc, data) {
            data.googleLanguage = googleNaturalLanguageClient();
            acc.push(data);
            return acc;
        }, []);

        next();
    };
};