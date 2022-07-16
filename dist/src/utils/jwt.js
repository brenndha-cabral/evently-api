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
exports.authToken = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
require("dotenv/config");
const httpexception_1 = __importDefault(require("./httpexception"));
const statusResponseEnum_1 = require("./statusResponseEnum");
const { JWT_SECRET } = process.env;
const jwtConfig = {
    expiresIn: '6h',
    algorithm: 'HS256',
};
const generateToken = (user) => {
    const token = (0, jsonwebtoken_1.sign)(user, JWT_SECRET, jwtConfig);
    return { token };
};
exports.default = {
    generateToken,
};
const authToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const validate = (0, jsonwebtoken_1.verify)(token, JWT_SECRET);
        return validate;
    }
    catch (error) {
        throw new httpexception_1.default(statusResponseEnum_1.StatusCode.UNAUTHORIZED, 'Invalid token');
    }
});
exports.authToken = authToken;
