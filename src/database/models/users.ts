import {
  Model,
  INTEGER,
  STRING,
  BOOLEAN,
  DATE,
} from 'sequelize';

import db from '../config/config';

class Users extends Model {
  id: number;

  name: string;

  email: string;

  password: string;

  image: string;

  adm: boolean;

  created: string;
}

Users.init(
  {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      type: STRING,
    },
    email: {
      type: STRING,
    },
    password: {
      type: STRING,
    },
    image: {
      type: STRING,
    },
    adm: {
      type: BOOLEAN,
    },
    created: {
      allowNull: false,
      type: DATE,
    },
  },
  {
    sequelize: db,
    modelName: 'Users',
    timestamps: false,
  },
);

export default Users;
