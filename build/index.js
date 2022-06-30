"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// import morgan from 'morgan';
const helmet_1 = __importDefault(require("helmet"));
// import RateLimit from 'express-rate-limit';
const index_1 = __importDefault(require("./routes/index"));
const config_1 = __importDefault(require("./config"));
const app = (0, express_1.default)();
const port = config_1.default.port;
app.use('/api', index_1.default);
app.use((0, helmet_1.default)());
app.use(express_1.default.json());
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
