"use strict";
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_typescript_1 = require("sequelize-typescript");
const User_1 = require("../models/User");
const databaseName = (_a = process.env.APP_DATABASE_NAME) !== null && _a !== void 0 ? _a : 'iesp';
const storage = (_b = process.env.APP_STORAGE_PATH) !== null && _b !== void 0 ? _b : './iesp-database.sqlite';
const database = new sequelize_typescript_1.Sequelize({
    database: databaseName,
    dialect: 'sqlite',
    storage: process.env.NODE_ENV !== 'test' ? storage : undefined,
    models: [User_1.default],
});
exports.default = database;
//# sourceMappingURL=database.js.map