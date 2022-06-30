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
const database_1 = __importDefault(require("../database"));
const config_1 = __importDefault(require("../config"));
const bcrypt_1 = __importDefault(require("bcrypt"));
class UserModel {
    Index() {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'select first_name, last_name from users;';
                const result = yield conn.query(sql);
                return result.rows;
            }
            catch (error) {
                console.log(`Error while trying to get users: ${error}`);
                return `Error while trying to get users: ${error}`;
            }
        });
    }
    show(first_name, last_name) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'SELECT first_name, last_name from users WHERE first_name = $1 AND last_name = $2;';
                const result = yield conn.query(sql, [first_name]);
                return result.rows;
            }
            catch (error) {
                console.log(`Erro while trying to get users from database: ${error}`);
                return `Erro while trying to get users from database: ${error}`;
            }
        });
    }
    create(u) {
        return __awaiter(this, void 0, void 0, function* () {
            const salt = parseInt(config_1.default.salt_round, 10);
            try {
                const conn = yield database_1.default.connect();
                const sql = 'INSERT INTO users(first_name, last_name, password) VALUES ($1, $2, $3); SELECT * FROM users where id = SCOPE_IDENTITY();';
                // hash the passowrd
                const hashPass = bcrypt_1.default.hashSync(`${u.password}${config_1.default.pepper}`, salt);
                // use jwt token
                const result = yield conn.query(sql, [u.first_name, u.last_name, hashPass]);
                return result.rows[0];
            }
            catch (error) {
                console.log(`Error while trying to create new user: ${error}`);
                return `Error while trying to create new user: ${error}`;
            }
        });
    }
}
exports.default = UserModel;
;
