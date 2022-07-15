import { Model, DataTypes } from 'sequelize';
import { connection } from '../config/index.js';

class Imc extends Model {}

Imc.init({
  value: {
    type: DataTypes.REAL,
    allowNull: false
  },
  situation: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: connection,

});

export default Imc;