"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = require("body-parser");
const dotenv_1 = require("dotenv");
const express_1 = require("express");
const database_1 = require("./database/database");
const authorization_1 = require("./middlewares/authorization");
const errors_1 = require("./middlewares/errors");
const auth_1 = require("./routers/auth");
const todo_1 = require("./routers/todo");
const user_1 = require("./routers/user");
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use(body_parser_1.default.json());
app.use(auth_1.default);
app.use(authorization_1.default);
app.use(todo_1.default);
app.use(user_1.default);
app.use(errors_1.errorLogHandle);
app.use(errors_1.errorResponseHandle);
app.listen(process.env.PORT, async () => {
    await database_1.default.sync();
    console.log(`Servidor rodando: http://localhost:${process.env.PORT}`);
});
exports.default = app;
//# sourceMappingURL=app.js.map