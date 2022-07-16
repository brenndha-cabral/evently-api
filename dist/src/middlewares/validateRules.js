"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateRules = exports.validateFieldsLogin = void 0;
const express_validator_1 = require("express-validator");
const statusResponseEnum_1 = require("../utils/statusResponseEnum");
exports.validateFieldsLogin = [
    (0, express_validator_1.check)('email')
        .exists()
        .withMessage('"email" is required'),
    (0, express_validator_1.check)('password')
        .exists()
        .withMessage('"password" is required')
        .isLength({ min: 6 })
        .withMessage('"password" length must be at least 8 characters long'),
];
const validateRules = (req, res, next) => {
    const errors = (0, express_validator_1.validationResult)(req);
    if (errors.isEmpty()) {
        next();
    }
    else {
        const errorMessage = errors.array()[0].msg;
        if (errorMessage.includes('required')) {
            return res.status(statusResponseEnum_1.StatusCode.BAD_REQUEST).json({ message: errorMessage });
        }
        return res.status(statusResponseEnum_1.StatusCode.UNPROCESSABLE_ENTITY).json({ message: errorMessage });
    }
};
exports.validateRules = validateRules;
