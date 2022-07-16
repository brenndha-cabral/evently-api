"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const loginController_1 = __importDefault(require("../controller/loginController"));
const validateRules_1 = require("../middlewares/validateRules");
const router = express_1.default.Router();
router.post('/', validateRules_1.validateFieldsLogin, validateRules_1.validateRules, loginController_1.default.loginAuthenticate);
exports.default = router;
