"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const AuthService_1 = require("../services/AuthService");
const UserService_1 = require("../services/UserService");
const Utils_1 = require("../util/Utils");
const router = express_1.default.Router();
router.post('/login', (0, Utils_1.asyncHandler)(async (req, res) => {
    const { password, userName } = req.body;
    const token = await AuthService_1.default.login(userName, password);
    res.json({ token });
}));
router.post('/sing-up', (0, Utils_1.asyncHandler)(async (req, res) => {
    const user = await UserService_1.default.create(req.body);
    const token = AuthService_1.default.createJWT(user);
    res.json({ token });
}));
exports.default = router;
//# sourceMappingURL=auth.js.map