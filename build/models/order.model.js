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
class OrderModel {
    userOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = 'select * from orders where user_id = ($1);';
                const result = yield conn.query(sql, [id]);
                conn.release();
                if (result.rows.length > 0) {
                    return result.rows;
                }
                else {
                    throw new Error("No data in the database");
                }
            }
            catch (error) {
                console.log(`Erro while trying to get orders: ${error}`);
                return `Erro while trying to get orders: ${error}`;
            }
        });
    }
    completedOrder(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const conn = yield database_1.default.connect();
                const sql = "select * from orders where user_id = ($1) and status = 'complete';";
                const result = yield conn.query(sql, [id]);
                conn.release();
                if (result.rows.length > 0) {
                    return result.rows;
                }
                else {
                    throw new Error("No data in the database");
                }
            }
            catch (error) {
                console.log(`Erro while trying to get completed orders: ${error}`);
                return `Erro while trying to get completed orders: ${error}`;
            }
        });
    }
}
exports.default = OrderModel;
