import { Model, DataTypes } from 'sequelize';
import { connection } from '../config/index.js';

class Modality extends Model {}

Modality.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  sequelize: connection
});

export default Modality;
