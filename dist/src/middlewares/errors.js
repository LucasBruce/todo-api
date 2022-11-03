"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorResponseHandle = exports.errorLogHandle = exports.AppError = exports.middleware = void 0;
const express_1 = require("express");
exports.middleware = express_1.default.Router();
exports.middleware.use((err, req, res, next) => {
    console.log(err.toString(), req.body);
    next(err);
});
exports.middleware.use((err, req, res, _) => {
    res.status(400).json({ message: 'error' });
});
class AppError extends Error {
    constructor(props) {
        super(props.customMessage);
        this.customMessage = props.customMessage;
        this.status = props.status;
    }
}
exports.AppError = AppError;
const errorLogHandle = (err, req, res, next) => {
    console.log(err.toString(), req.body);
    next(err);
};
exports.errorLogHandle = errorLogHandle;
const errorResponseHandle = (err, req, res, _) => {
    res.status(err.status).json({ message: err.customMessage });
};
exports.errorResponseHandle = errorResponseHandle;
//# sourceMappingURL=errors.js.map