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
    name: {type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Name can not be empty."
        }
      }},
    price: {type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Price can not be empty."
        }
      }},
    book_id: {type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Book ID can not be empty."
        }
      }},
    pages: {type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Pages can not be empty."
        }
      }},
    rating: {type: DataTypes.STRING,
      validate: {
        notEmpty: {
          message: "Rating can not be empty."
        }
      }}
  }, {
    sequelize,
    modelName: 'book',
  });
  return book;
};