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
const product_model_1 = __importDefault(require("../models/product.model"));
const tester = (0, supertest_1.default)(index_1.default);
const ProductObject = new product_model_1.default();
const data = {
    name: "phone",
    price: 3000,
    category: "electronics"
};
describe('writing tests for product functionalities', () => {
    it('checking the create of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.post("/api/product/create").send(data).set('authorization', config_1.default.jwt);
        expect(response.statusCode).toEqual(200);
    }));
    it('checking the index of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.get("/api/product/");
        expect(response.statusCode).toEqual(200);
        let product = yield ProductObject.index();
        expect(typeof product).toEqual('object');
        product = product;
        expect(product[0].name).toEqual(data.name);
    }));
    it('checking the show of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const productName = data.name;
        const response = yield tester.get("/api/product/show?name=" + productName);
        expect(response.statusCode).toEqual(200);
        let product = yield ProductObject.show(productName);
        expect(typeof product).toEqual('object');
        product = product;
        expect(product[0].name).toEqual(data.name);
    }));
    it('checking the top 5 of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.get("/api/product/top5");
        // expect to find no orders
        expect(response.statusCode).toEqual(400);
    }));
    it('checking the category of the endpoint', () => __awaiter(void 0, void 0, void 0, function* () {
        const category = data.category;
        const response = yield tester.get("/api/product/category?category=" + category);
        expect(response.statusCode).toEqual(200);
        let product = yield ProductObject.category(category);
        expect(typeof product).toEqual('object');
        product = product;
        expect(product[0].name).toEqual(data.name);
    }));
});
