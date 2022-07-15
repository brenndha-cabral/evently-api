import {
  Model,
  INTEGER,
  STRING,
  DECIMAL,
  DATE,
  NUMBER,
} from 'sequelize';

import db from '../config/config';

class Events extends Model {
  id: number;

  title: string;

  description: number;

  date: string;

  value: number;

  address: string;

  image: string;

  qtdTicket: number;

  created: string;
}

Events.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    title: {
      type: STRING,
    },
    description: {
      type: STRING,
    },
    date: {
      type: DATE,
    },
    value: {
      type: DECIMAL,
    },
    address: {
      type: STRING,
    },
    image: {
      type: STRING,
    },
    qtdTicket: {
      type: NUMBER,
      field: 'qtd_ticket',
    },
    created: {
      allowNull: false,
      type: DATE,
    },
  },
  {
    underscored: true,
    sequelize: db,
    modelName: 'Events',
    timestamps: false,
  },
);

export default Events;
