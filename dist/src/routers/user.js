"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const UserService_1 = require("../services/UserService");
const Utils_1 = require("../util/Utils");
const router = express_1.default.Router();
router.get('/user', (0, Utils_1.asyncHandler)(async (req, res) => {
    const localUsers = await UserService_1.default.findAll();
    res.json(localUsers);
}));
router.get('/user/:id', (0, Utils_1.asyncHandler)(async (req, res) => {
    const user = await UserService_1.default.findById(req.params.id);
    res.json(user);
}));
router.put('/user/:id', (0, Utils_1.asyncHandler)(async (req, res) => {
    const user = await UserService_1.default.update(req.params.id, req.body);
    res.json(user);
}));
exports.default = router;
//# sourceMappingURL=user.js.map