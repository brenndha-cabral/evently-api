"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const config_1 = __importDefault(require("../config/config"));
const events_1 = __importDefault(require("./events"));
const users_1 = __importDefault(require("./users"));
class Orders extends sequelize_1.Model {
}
Orders.init({
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: sequelize_1.INTEGER,
    },
    userId: {
        type: sequelize_1.INTEGER,
        field: 'user_id',
    },
    eventId: {
        type: sequelize_1.INTEGER,
        field: 'event_id',
    },
    status: {
        type: (0, sequelize_1.ENUM)('active', 'canceled', 'ended'),
    },
    created: {
        allowNull: false,
        type: sequelize_1.DATE,
    },
}, {
    underscored: true,
    sequelize: config_1.default,
    modelName: 'Orders',
    timestamps: false,
});
users_1.default.hasMany(Orders, { foreignKey: 'userId' });
events_1.default.hasMany(Orders, { foreignKey: 'eventId' });
Orders.belongsTo(users_1.default, { foreignKey: 'userId' });
Orders.belongsTo(events_1.default, { foreignKey: 'eventId' });
exports.default = Orders;
