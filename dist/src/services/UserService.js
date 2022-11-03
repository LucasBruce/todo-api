"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = require("bcrypt");
const errors_1 = require("../middlewares/errors");
const User_1 = require("../models/User");
const SALT = (_a = process.env.PASSWORD_SALT) !== null && _a !== void 0 ? _a : 10;
class UserService {
    async findById(id) {
        if (!id) {
            throw new errors_1.AppError({ customMessage: 'Id required', status: 404 });
        }
        const user = await User_1.default.findOne({ where: { id } });
        if (!user) {
            throw new errors_1.AppError({ customMessage: 'User not found', status: 404 });
        }
        return user;
    }
    findAll() {
        return User_1.default.findAll({
            attributes: {
                exclude: ['active', 'password'],
            },
        });
    }
    async update(id, userRequest) {
        const user = await this.findById(id);
        return user.update(userRequest);
    }
    async create(userRequest) {
        const { password } = userRequest;
        const user = await User_1.default.count({
            where: { userName: userRequest.userName },
        });
        if (user) {
            throw new errors_1.AppError({
                customMessage: 'Already registered user',
                status: 400,
            });
        }
        try {
            const hash = await bcrypt_1.default.hash(password, parseInt(SALT.toString(), 10));
            return User_1.default.create(Object.assign(Object.assign({}, userRequest), { password: hash, active: true }));
        }
        catch (e) {
            throw new errors_1.AppError({
                customMessage: 'Bcrypt error',
                status: 400,
            });
        }
    }
}
exports.default = new UserService();
//# sourceMappingURL=UserService.js.map