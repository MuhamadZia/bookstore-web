"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class author_book extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      author_book.belongsTo(models.book, {
        foreignKey: "book_id",
        targetKey: "book_id",
      });
      author_book.belongsTo(models.author, {
        foreignKey: "author_id",
        targetKey: "author_id",
      });
    }
  }
  author_book.init(
    {
      author_id: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Author ID can not be empty.",
          },
        },
      },
      book_id: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Book ID can not be empty.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "author_book",
    }
  );
  return author_book;
};
