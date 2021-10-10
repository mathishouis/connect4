"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.init = void 0;
const express_1 = __importDefault(require("express"));
const BoardRouter_1 = __importDefault(require("./BoardRouter"));
function init(app) {
    const router = express_1.default.Router();
    app.use(express_1.default.static('public'));
    app.use('/board', BoardRouter_1.default);
    //app.use(router);
}
exports.init = init;
