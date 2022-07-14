import { Model, DataTypes } from 'sequelize';
import { connection } from '../config/index.js';

class CreditCard extends Model {
  static associate(models) {
    this.belongsTo(models.User);
  }
}

CreditCard.init({
  numberCard: DataTypes.STRING,
  flagCard: DataTypes.STRING,
  namePrintCard: DataTypes.STRING,
  userId: DataTypes.INTEGER
}, {
  sequelize: connection
});

export default CreditCard;
