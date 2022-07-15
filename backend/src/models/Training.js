import { Model, DataTypes } from 'sequelize';
import { connection } from '../config/index.js';

class Training extends Model {}

Training.init({
  name: DataTypes.STRING,
  userId: DataTypes.INTEGER,
  repetitions: DataTypes.INTEGER
}, {
  sequelize: connection,
});

export default Training;
