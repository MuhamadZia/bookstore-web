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
      book.belongsToMany(models.author, {
        through: models.author_book,
        foreignKey: "book_id",
        uniqueKey:'book_id'

      });
      book.belongsToMany(models.genre, {
        through: models.book_genre,
        foreignKey: "book_id",
        otherKey: "genre_id",
      });

    }
  }
  book.init({
    name: DataTypes.STRING,
    price: DataTypes.STRING,
    book_id: DataTypes.STRING,
    pages: DataTypes.INTEGER,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};