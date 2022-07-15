import {
  Model,
  INTEGER,
  ENUM,
  DATE,
} from 'sequelize';

import db from '../config/config';
import Events from './events';
import Users from './users';

class Orders extends Model {
  id: number;

  userId: number;

  eventId: number;

  status: string;

  created: string;
}

Orders.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    userId: {
      type: INTEGER,
      field: 'user_id',
    },
    eventId: {
      type: INTEGER,
      field: 'event_id',
    },
    status: {
      type: ENUM('active', 'canceled', 'ended'),
    },
    created: {
      allowNull: false,
      type: DATE,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Orders',
    timestamps: false,
  },
);

Users.hasMany(Orders, { foreignKey: 'userId' });
Events.hasMany(Orders, { foreignKey: 'eventId' });

Orders.belongsTo(Users, { foreignKey: 'userId' });
Orders.belongsTo(Events, { foreignKey: 'eventId' });

export default Orders;
