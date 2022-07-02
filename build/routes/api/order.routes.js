"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const order_controller_1 = require("../../controllers/order.controller");
const authenticate_1 = require("../../middleware/authenticate");
const orderRoutes = (0, express_1.Router)();
orderRoutes.get('/userOrders', authenticate_1.authenticate, order_controller_1.userOrders);
orderRoutes.get('/completedOrders', authenticate_1.authenticate, order_controller_1.completedOrders);
exports.default = orderRoutes;
