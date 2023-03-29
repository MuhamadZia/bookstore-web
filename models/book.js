'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book.belongsToMany(models.author, 
        {
          through:models.author_book,
          foreignKey:'book_id',
          otherKey:'author_id'
        }
        )
    }
  }
  book.init({
    name: DataTypes.STRING,
    // genre: DataTypes.STRING,
    price: DataTypes.INTEGER,
    book_id: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};