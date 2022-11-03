"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    var _a;
    return ({
        port: (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 3000,
        jwtSecret: process.env.JWT_SECRET,
        jwtExpiresIn: process.env.JWT_EXPIRES_IN,
        database: {
            type: process.env.DATABASE_TYPE,
            database: process.env.DATABASE_NAME,
            synchronize: true,
        },
    });
};
//# sourceMappingURL=configuration.js.map