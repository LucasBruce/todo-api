"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => ({
    database: {
        type: process.env.DATABASE_TYPE,
        database: process.env.DATABASE_NAME,
        synchronize: true,
    },
});
//# sourceMappingURL=configuration.js.map