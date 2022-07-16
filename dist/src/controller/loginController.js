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
const jwt_1 = __importDefault(require("../utils/jwt"));
const usersService_1 = __importDefault(require("../service/usersService"));
const statusResponseEnum_1 = require("../utils/statusResponseEnum");
const loginAuthenticate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const userLogin = req.body;
    const user = yield usersService_1.default.getUserLogin(userLogin.email);
    if (!user) {
        return res.status(statusResponseEnum_1.StatusCode.UNAUTHORIZED).json({ message: 'name or password invalid' });
    }
    const token = jwt_1.default.generateToken({
        id: user.id, name: user.name, email: user.email,
    });
    return res.status(statusResponseEnum_1.StatusCode.OK).json(token);
});
exports.default = {
    loginAuthenticate,
};
