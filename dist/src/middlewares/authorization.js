"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.middleware = void 0;
const express_1 = require("express");
const AuthService_1 = require("../services/AuthService");
exports.middleware = express_1.default.Router();
exports.middleware.use((req, res, next) => {
    const authorization = req.headers['authorization'];
    if (authorization) {
        const [tokenType, token] = authorization.split(' ');
        if (tokenType === 'bearer') {
            const payload = AuthService_1.default.validate(token);
            if (payload) {
                next();
                return;
            }
        }
    }
    res.status(400).json({ message: 'invalid token' });
});
exports.default = exports.middleware;
//# sourceMappingURL=authorization.js.map