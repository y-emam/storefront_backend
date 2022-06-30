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
const express_1 = require("express");
const config_1 = __importDefault(require("../../config"));
const user_controller_1 = require("../../controllers/user.controller");
const user_model_1 = __importDefault(require("../../models/user.model"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const userRoutes = (0, express_1.Router)();
const userObject = new user_model_1.default();
userRoutes.get('/');
userRoutes.post('/show', user_controller_1.show);
userRoutes.post('/create', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        res.send(req.body);
        console.log('====================================');
        console.log(req);
        console.log('====================================');
        if (data.first_name !== '' && typeof data.first_name === 'string' &&
            data.last_name !== '' && typeof data.last_name === 'string' &&
            data.password !== '' && typeof data.password === 'string') {
            const user = yield userObject.create(data);
            const token = jsonwebtoken_1.default.sign({ user }, config_1.default.token);
            res.send(token);
        }
        else {
            res.status(400);
            res.send('Error: please input correct values');
        }
    }
    catch (error) {
        return next(error);
    }
}));
exports.default = userRoutes;
