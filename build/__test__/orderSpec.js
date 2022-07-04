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
const tester = (0, supertest_1.default)(index_1.default);
describe('writing tests for order functionalities', () => {
    it('checking the userOrders of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = "5";
        const response = yield tester.get("/api/order/userOrders?id=" + id).set('authorization', config_1.default.jwt);
        expect(response.statusCode).toEqual(400);
    }));
    it('checking the completed orders of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const id = "7";
        const response = yield tester.get("/api/order/completedOrders?id=" + id).set('authorization', config_1.default.jwt);
        expect(response.statusCode).toEqual(400);
    }));
});
