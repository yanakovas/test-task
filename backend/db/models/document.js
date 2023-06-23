const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Document extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      // define association here
    }
  }
  Document.init(
    {
      name: DataTypes.TEXT,
      quantity: DataTypes.INTEGER,
      deliveryDate: DataTypes.TEXT,
      price: DataTypes.INTEGER,
      currency: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Document',
    }
  );
  return Document;
};
