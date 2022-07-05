"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createOrder = exports.completedOrders = exports.userOrders = void 0;
const order_model_1 = __importDefault(require("../models/order.model"));
const OrderObject = new order_model_1.default();
const userOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        const orders = yield OrderObject.userOrder(id);
        if (typeof orders === 'string') {
            throw new Error(orders);
        }
        else {
            res.json({
                status: 'success',
                data: orders
            });
        }
    }
    catch (error) {
        console.log(`Error while trying to get orders from the database: ${error}`);
        res.status(400).json({
            status: 'error',
            message: `Error while trying to get orders from the database: ${error}`
        });
    }
});
exports.userOrders = userOrders;
const completedOrders = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.query.id;
        const orders = yield OrderObject.completedOrder(id);
        if (typeof orders === 'string') {
            throw new Error(orders);
        }
        else {
            res.json({
                status: 'success',
                data: orders
            });
        }
    }
    catch (error) {
        console.log(`Error while trying to get competed orders from the database: ${error}`);
        res.status(400).json({
            status: 'error',
            message: `Error while trying to get competed orders from the database: ${error}`
        });
    }
});
exports.completedOrders = completedOrders;
const createOrder = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        const orders = yield OrderObject.createOrder(data);
        if (typeof orders === 'string') {
            throw new Error(orders);
        }
        else {
            res.json({
                status: 'success',
                data: orders
            });
        }
    }
    catch (error) {
        console.log(`Error while trying to get competed orders from the database: ${error}`);
        res.status(400).json({
            status: 'error',
            message: `Error while trying to get competed orders from the database: ${error}`
        });
    }
});
exports.createOrder = createOrder;
