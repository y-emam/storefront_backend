"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const { PORT, NODE_ENV, POSTGRES_HOST, POSTGRES_DB, POSTGRES_DB_TEST, POSTGRES_USER, POSTGRES_PASSWORD, BCRYPT_PASSWORD, SALT_ROUNDS, TOKEN_SECRET, } = process.env;
exports.default = {
    port: PORT,
    env: NODE_ENV,
    host: POSTGRES_HOST,
    db: POSTGRES_DB,
    db_test: POSTGRES_DB_TEST,
    db_user: POSTGRES_USER,
    db_password: POSTGRES_PASSWORD,
    pepper: BCRYPT_PASSWORD,
    salt_round: SALT_ROUNDS,
    token: TOKEN_SECRET,
};
