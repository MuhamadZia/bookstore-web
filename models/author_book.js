'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      author_book.belongsTo(models.author, 
        {
        foreignKey:'author_id',
        targetKey:'author_id'
        }
      )
      author_book.belongsTo(models.book, 
        {
        foreignKey:'book_id',
        targetKey:'book_id'
        }
      )
    }
  }
  author_book.init({
    author_id: DataTypes.STRING,
    book_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'author_book',
  });
  return author_book;
};