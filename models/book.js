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
    book_id: DataTypes.INTEGER,
    pages: DataTypes.INTEGER,
    rating: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};