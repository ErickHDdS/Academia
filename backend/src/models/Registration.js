import { Model, DataTypes } from 'sequelize';
import { connection } from '../config/index.js';

class Registration extends Model {}

Registration.init({
  acquired: DataTypes.DATEONLY,
  planId: DataTypes.INTEGER,
  lessonId: DataTypes.INTEGER,
  userId: DataTypes.INTEGER
}, {
  sequelize: connection
});

export default Registration;
