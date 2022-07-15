import { Model, DataTypes } from 'sequelize';
import { connection } from '../config/index.js';

class Exam extends Model {}

Exam.init({
  weight: DataTypes.FLOAT,
  height: DataTypes.FLOAT,
  pressure: DataTypes.STRING,
  fatPercentage: DataTypes.FLOAT,
  massPercentage: DataTypes.FLOAT,
  able: DataTypes.BOOLEAN,
  imc: DataTypes.FLOAT,
  userId: DataTypes.INTEGER
}, {
  sequelize: connection
});

export default Exam;
