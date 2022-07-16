"use strict";
exports.__esModule = true;
exports.MyLogger = void 0;
var MyLogger = /** @class */ (function () {
    function MyLogger() {
    }
    MyLogger.prototype.error = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        throw new Error('Method not implemented.');
    };
    MyLogger.prototype.warn = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        throw new Error('Method not implemented.');
    };
    MyLogger.prototype.debug = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        throw new Error('Method not implemented.');
    };
    MyLogger.prototype.verbose = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        throw new Error('Method not implemented.');
    };
    MyLogger.prototype.setLogLevels = function (levels) {
        throw new Error('Method not implemented.');
    };
    MyLogger.prototype.log = function (message) {
        var optionalParams = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            optionalParams[_i - 1] = arguments[_i];
        }
        console.log(message, optionalParams);
    };
    return MyLogger;
}());
exports.MyLogger = MyLogger;
