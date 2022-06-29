"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = __importDefault(require("./config"));
const pg_1 = require("pg");
const client = new pg_1.Pool({
    host: config_1.default.host,
    database: config_1.default.env == 'dev' ? config_1.default.db : config_1.default.db_user,
    user: config_1.default.db_user,
    password: config_1.default.db_password,
});
exports.default = client;
