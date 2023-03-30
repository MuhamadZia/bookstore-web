'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class book_genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      book_genre.belongsTo(models.book, {
        foreignKey:'book_id',
        targetKey:'book_id',
      })
      book_genre.belongsTo(models.genre, {
        foreignKey:'genre_id',
        targetKey:'genre_id'
      })
    }
  }
  book_genre.init({
    book_id: DataTypes.STRING,
    genre_id: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book_genre',
  });
  return book_genre;
};