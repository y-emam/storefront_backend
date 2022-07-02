"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authenticate = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const config_1 = __importDefault(require("../config"));
const authenticate = (req, res, next) => {
    try {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1];
            try {
                const verified = jsonwebtoken_1.default.verify(token, config_1.default.token);
                if (verified) {
                    next();
                }
                else {
                    res.status(401).send(`Error: failed to authenticate user by token: unvalid token`);
                }
            }
            catch (error) {
                res.status(401).send(`Error: failed to authenticate user by token: ${error}`);
            }
        }
        else {
            res.status(401).send(`Error: failed to authenticate user by token: no authentication token`);
        }
    }
    catch (error) {
        res.status(401).send(`Error: failed to authenticate user by token: ${error}`);
    }
};
exports.authenticate = authenticate;
