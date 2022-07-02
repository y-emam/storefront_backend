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
exports.category = exports.top5 = exports.create = exports.show = exports.index = void 0;
const product_model_1 = __importDefault(require("../models/product.model"));
const ProductObject = new product_model_1.default();
const index = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.index = index;
const show = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.show = show;
const create = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const data = req.body;
    try {
        // validation of data
        if (data.name === '' || typeof data.name !== 'string'
            || data.price <= 0 || typeof data.price !== 'number') {
            res.json({
                status: 'error',
                message: 'Invalid input data'
            });
            return;
        }
        // work with database
        const product = yield ProductObject.create(data);
        // check success or failer of working with database
        if (typeof product === 'string') {
            res.json({
                status: 'error',
                message: `Error while trying to create product: ${product}`
            });
        }
        else {
            res.json({
                status: 'success',
                data: product,
            });
        }
    }
    catch (error) {
        res.json({
            status: 'error',
            message: error,
        });
    }
});
exports.create = create;
const top5 = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.top5 = top5;
const category = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
});
exports.category = category;
