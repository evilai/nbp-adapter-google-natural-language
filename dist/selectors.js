'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.placeNamesSelector = exports.placesSelector = exports.entitiesSelector = undefined;

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var entitiesSelector = exports.entitiesSelector = function entitiesSelector(annotation) {
  return (0, _get2.default)(annotation, 'entities');
};
var placesSelector = exports.placesSelector = function placesSelector(annotation) {
  var salience = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;
  return (0, _get2.default)(entitiesSelector(annotation), 'places', []).filter(function (place) {
    return place.type === 'LOCATION' && place.salience >= salience;
  });
};
var placeNamesSelector = exports.placeNamesSelector = function placeNamesSelector(annotation) {
  var salience = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 80;
  return placesSelector(annotation, salience = 80).map(function (place) {
    return place.name;
  });
};