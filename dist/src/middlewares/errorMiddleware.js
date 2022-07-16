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
const httpexception_1 = __importDefault(require("../utils/httpexception"));
const statusResponseEnum_1 = require("../utils/statusResponseEnum");
const errorMiddleware = (error, req, res, _next) => __awaiter(void 0, void 0, void 0, function* () {
    if (error instanceof httpexception_1.default) {
        res.status(error.status).json({ message: error.message });
    }
    res.status(statusResponseEnum_1.StatusCode.INTERNAL_SERVER_ERROR)
        .json({ message: statusResponseEnum_1.StatusResponse.INTERNAL_SERVER_ERROR });
});
exports.default = errorMiddleware;
