import { Model, DataTypes } from 'sequelize';
import { connection } from '../config/index.js';

class Horary extends Model {}

Horary.init({
  start: {
    type: DataTypes.TIME,
    allowNull: false
  }
}, {
  sequelize: connection
});

export default Horary;
