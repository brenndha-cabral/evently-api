"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
class Events extends sequelize_1.Model {
}
Events.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    title: {
        type: sequelize_1.STRING,
    },
    description: {
        type: sequelize_1.STRING,
    },
    date: {
        type: sequelize_1.DATE,
    },
    value: {
        type: sequelize_1.DECIMAL,
    },
    address: {
        type: sequelize_1.STRING,
    },
    image: {
        type: sequelize_1.STRING,
    },
    qtdTicket: {
        type: sequelize_1.NUMBER,
        field: 'qtd_ticket',
    },
    created: {
        allowNull: false,
        type: sequelize_1.DATE,
    },
}, {
    underscored: true,
    sequelize: config_1.default,
    modelName: 'Events',
    timestamps: false,
});
exports.default = Events;
