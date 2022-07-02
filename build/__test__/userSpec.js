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
describe('writing tests for user functionalities', () => {
    it('get all users', () => __awaiter(void 0, void 0, void 0, function* () {
        const response = yield tester.get("api/user/");
        expect(response.statusCode).toEqual(200);
    }));
    it('get specific user using first name and last name', () => __awaiter(void 0, void 0, void 0, function* () {
        const body = {
            first_name: 'yasser',
            last_name: 'mohamed'
        };
        const response = yield tester.post("api/user/show").send(body).set('authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJfaWQiOjYsImZpcnN0X25hbWUiOiJZYXNzZXIiLCJsYXN0X25hbWUiOiJNb2hhbWVkIiwicGFzc3dvcmQiOiIkMmIkMTAkWWE0aEF3ZHhaVzdKTlc4MEVMY0tYLjNtbUIud0plTDZ0czdodXpuSjhqWHN3cGFVRk1ieWUifSwiaWF0IjoxNjU2NzcwODM4fQ.jtZmUa2fu2ywiauUm8OwTSUGvikUsMO4mPk04myjvyM');
        expect(response.statusCode).toEqual(200);
    }));
    it('create new user', () => __awaiter(void 0, void 0, void 0, function* () {
        const body = {
            first_name: 'ahmed',
            last_name: 'mohamed',
            password: '1234'
        };
        const response = yield tester.post("api/user/create");
        expect(response.statusCode).toEqual(200);
    }));
});
