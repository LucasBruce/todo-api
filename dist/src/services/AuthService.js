"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const jsonwebtoken_1 = require("jsonwebtoken");
const errors_1 = require("../middlewares/errors");
const User_1 = require("../models/User");
class AuthService {
    constructor() {
        var _a;
        this.secret = (_a = process.env.JWT_SECRET) !== null && _a !== void 0 ? _a : 'dev-secret';
    }
    createJWT(user) {
        const payload = {
            id: user.id,
            userName: user.userName,
        };
        return jsonwebtoken_1.default.sign(payload, this.secret);
    }
    async login(userName, password) {
        const user = await User_1.default.findOne({
            where: {
                userName,
            },
        });
        if (user) {
            const isValid = await bcrypt_1.default.compare(password, user.password);
            if (isValid) {
                return this.createJWT(user);
            }
            throw new errors_1.AppError({
                customMessage: 'Invalid user or password',
                status: 400,
            });
        }
        throw new errors_1.AppError({ customMessage: 'User not found', status: 400 });
    }
    validate(token) {
        try {
            return jsonwebtoken_1.default.verify(token, this.secret);
        }
        catch (e) {
            throw new errors_1.AppError({ customMessage: 'Invalid JWT', status: 401 });
        }
    }
}
exports.default = new AuthService();
//# sourceMappingURL=AuthService.js.map