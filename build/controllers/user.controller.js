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
exports.create = exports.show = exports.index = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const user_model_1 = __importDefault(require("../models/user.model"));
const UserObject = new user_model_1.default();
const index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield UserObject.Index();
        if (users === 'string') {
            throw new Error(users);
        }
        else {
            res.json({
                status: 'success',
                data: users
            });
        }
    }
    catch (error) {
        console.log(`Error: failed to show all users: ${error}`);
        res.json({
            status: 'error',
            message: `Error: failed to show all users: ${error}`
        });
    }
});
exports.index = index;
const show = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const first_name = req.body.first_name;
        const last_name = req.body.last_name;
        if (typeof first_name !== 'string' || first_name === ''
            || typeof last_name !== 'string' || last_name === '') {
            throw new Error('Invalid input: ' + first_name + ' ' + last_name);
        }
        else {
            const user = yield UserObject.show(first_name, last_name);
            if (typeof user === 'string') {
                throw new Error(user);
            }
            else {
                res.json({
                    status: 'success',
                    data: user
                });
            }
        }
    }
    catch (error) {
        console.log(`Error: failed to show the user: ${error}`);
        res.json({
            status: 'error',
            message: `Error: failed to show the user: ${error}`
        });
    }
});
exports.show = show;
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = req.body;
        if (data.first_name !== '' && typeof data.first_name === 'string' &&
            data.last_name !== '' && typeof data.last_name === 'string' &&
            data.password !== '' && typeof data.password === 'string') {
            // hash the password
            const salt = parseInt(config_1.default.salt_round, 10);
            data.password = bcrypt_1.default.hashSync(`${data.password}${config_1.default.pepper}`, salt);
            const user = yield UserObject.create(data);
            if (typeof user === 'string') {
                res.json({
                    status: 'error',
                    message: `faield to create new user: ${user}`
                });
            }
            else {
                const token = jsonwebtoken_1.default.sign({ user }, config_1.default.token);
                res.json({
                    status: 'success',
                    user: user,
                    token: token
                });
            }
        }
        else {
            res.status(400);
            res.send('Error: please input correct values');
        }
    }
    catch (error) {
        return next(error);
    }
});
exports.create = create;
