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
const tester = (0, supertest_1.default)(index_1.default);
describe('writing tests for product functionalities', () => {
    it('checking the index of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.get("/api/product/");
        expect(response.statusCode).toEqual(200);
    }));
    it('checking the show of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const productName = 'mango';
        const response = yield tester.get("/api/product/show?name=" + productName);
        expect(response.statusCode).toEqual(200);
    }));
    it('checking the create of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const data = {
            name: "phone",
            price: 3000,
            category: "electronics"
        };
        const response = yield tester.post("/api/product/create").send(data).set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjYsImZpcnN0X25hbWUiOiJZYXNzZXIiLCJsYXN0X25hbWUiOiJNb2hhbWVkIiwicGFzc3dvcmQiOiIkMmIkMTAkWWE0aEF3ZHhaVzdKTlc4MEVMY0tYLjNtbUIud0plTDZ0czdodXpuSjhqWHN3cGFVRk1ieWUifSwiaWF0IjoxNjU2NzcwODM4fQ.jtZmUa2fu2ywiauUm8OwTSUGvikUsMO4mPk04myjvyM');
        expect(response.statusCode).toEqual(200);
    }));
    it('checking the top 5 of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.get("/api/product/top5");
        expect(response.statusCode).toEqual(200);
    }));
    it('checking the category of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const category = 'food';
        const response = yield tester.get("/api/product/category?category=" + category);
        expect(response.statusCode).toEqual(200);
    }));
});
