"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("../../controllers/user.controller");
const userRoutes = (0, express_1.Router)();
userRoutes.post('/', user_controller_1.index);
userRoutes.post('/show', user_controller_1.show);
userRoutes.post('/create', user_controller_1.create);
exports.default = userRoutes;
