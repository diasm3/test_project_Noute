"use strict";
exports.__esModule = true;
exports.configs = exports.typeORMConfig = exports.serverConfig = void 0;
var dotenv = require("dotenv");
dotenv.config();
exports.serverConfig = {
    port: parseInt(process.env.SERVER_PORT)
};
exports.typeORMConfig = {
    type: process.env.DB_TYPE === 'mariadb' ? 'mariadb' : 'mysql',
    host: process.env.DB_HOST,
    port: parseInt(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    entities: ['dist/**/*.entity.js'],
    synchronize: process.env.DB_SYNCHRONIZE === 'true' ? true : false
};
exports.configs = {
    typeORMConfig: exports.typeORMConfig,
    serverConfig: exports.serverConfig
};
exports["default"] = exports.configs;
