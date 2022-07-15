import { Model, DataTypes } from 'sequelize';
import { connection } from '../config/index.js';

class Plans extends Model {
  static associate(models) {
    this.belongsTo(models.Modality);
  }
}

Plans.init({
  value: {
    type: DataTypes.REAL,
    allowNull: false
  },
  type: {
    type: DataTypes.ENUM,
    values: ['MENSAL', 'SEMESTRAL', 'ANUAL'],
    allowNull: false
  },
  modalitiesId: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  frequency: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize:connection
});

export default Plans;
