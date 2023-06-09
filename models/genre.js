"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      genre.belongsToMany(models.book, {
        through: models.book_genre,
        foreignKey: "genre_id",
        otherKey: "book_id",
      });
    }
  }
  genre.init(
    {
      name: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            message: "Name can not be empty.",
          },
        },
      },
      genre_id: {
        type: DataTypes.INTEGER,
        validate: {
          notEmpty: {
            message: "Genre ID can not be empty.",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "genre",
    }
  );
  return genre;
};
