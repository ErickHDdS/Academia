import { DataTypes, Model } from 'sequelize';
import { connection } from '../config/index.js';

class User extends Model { }

User.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cpf: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identity: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    birthDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ['ADMIN', 'NORMAL'],
      allowNull: false,
      defaultValue: 'NORMAL',
    },
  },
  { sequelize: connection },
);

export default User;
