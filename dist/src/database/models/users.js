"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
class Users extends sequelize_1.Model {
}
Users.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    name: {
        type: sequelize_1.STRING,
    },
    email: {
        type: sequelize_1.STRING,
    },
    password: {
        type: sequelize_1.STRING,
    },
    image: {
        type: sequelize_1.STRING,
    },
    adm: {
        type: sequelize_1.BOOLEAN,
    },
    created: {
        allowNull: false,
        type: sequelize_1.DATE,
    },
}, {
    sequelize: config_1.default,
    modelName: 'Users',
    timestamps: false,
});
exports.default = Users;
