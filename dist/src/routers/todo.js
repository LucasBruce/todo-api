"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pathName = exports.router = void 0;
const express_1 = require("express");
const errors_1 = require("../middlewares/errors");
const Utils_1 = require("../util/Utils");
exports.router = express_1.default.Router();
exports.pathName = '/todo';
exports.router.get(exports.pathName, (req, res) => {
    res.json({ message: 'todo' });
});
exports.router.post(exports.pathName, (req, res) => {
    res.json({ message: 'todo' });
});
exports.router.put('/todo/:id', (req, res) => {
    res.json({ message: 'todo' });
});
exports.router.get('/todo/:id', (req, res) => {
    res.json({ message: 'Welcome' });
});
exports.router.post('/', (req, res) => {
    const todo = req.body;
    res.json(todo.message);
});
exports.router.post('/full-name', (req, res) => {
    const body = req.body;
    if (body.firstName !== 'Anderson') {
        throw new errors_1.AppError({
            customMessage: 'Name not registered',
            status: 401,
        });
    }
    res.json({ name: (0, Utils_1.fullNameConcat)(body.firstName, body.lastName) });
});
exports.default = exports.router;
//# sourceMappingURL=todo.js.map