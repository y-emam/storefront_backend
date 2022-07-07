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
const supertest_1 = __importDefault(require("supertest"));
const index_1 = __importDefault(require("../index"));
const config_1 = __importDefault(require("../config"));
const user_model_1 = __importDefault(require("../models/user.model"));
const order_model_1 = __importDefault(require("../models/order.model"));
const tester = (0, supertest_1.default)(index_1.default);
const UserObject = new user_model_1.default();
const OrderObject = new order_model_1.default();
let data;
let user;
describe('writing tests for order functionalities', () => {
    beforeAll(() => __awaiter(void 0, void 0, void 0, function* () {
        const users = yield UserObject.Index();
        if (typeof users === 'object')
            user = users[0];
        data = {
            user_id: user.user_id,
            status: 'active'
        };
    }));
    it('create an order', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.post('/api/order/createOrder').send(data).set('authorization', config_1.default.jwt);
        expect(response.statusCode).toEqual(200);
        let order = yield OrderObject.createOrder(data);
        expect(order).toEqual({
            user_id: user.user_id,
            status: 'active'
        });
        data.status = 'complete';
        order = yield OrderObject.createOrder(data);
    }));
    it('checking the userOrders of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.get("/api/order/userOrders?id=" + data.user_id).set('authorization', config_1.default.jwt);
        expect(response.statusCode).toEqual(200);
        const orders = yield OrderObject.userOrder(data.user_id);
        expect(orders[0]).toEqual({
            order_id: orders[0].order_id,
            user_id: data.user_id,
            status: 'active'
        });
    }));
    it('checking the completed orders of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.get("/api/order/completedOrders?id=" + data.user_id).set('authorization', config_1.default.jwt);
        expect(response.statusCode).toEqual(200);
        const orders = yield OrderObject.completedOrder(data.user_id);
        expect(orders[0]).toEqual({
            order_id: orders[0].order_id,
            user_id: data.user_id,
            status: 'complete'
        });
    }));
});
