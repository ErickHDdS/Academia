import { Model, DataTypes } from 'sequelize';
import { connection } from '../config/index.js';

class Lesson extends Model {
  static associate(models) {
    this.belongsTo(models.Horary);
    this.belongsTo(models.Modality);
  }
}

Lesson.init({
  vacancies: DataTypes.INTEGER,
  modalities_id: DataTypes.INTEGER,
  horary_id: DataTypes.INTEGER
}, {
  sequelize: connection
});

export default Lesson;
