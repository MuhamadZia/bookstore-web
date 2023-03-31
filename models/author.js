'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class author extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      author.belongsToMany(models.book, {
        through: models.author_book,
        foreignKey: "author_id",
        otherKey: "book_id",
      });
    }
  }
  author.init({
    name: {type: DataTypes.STRING,
    validate: {
        notEmpty: {
          message: "Name can not be empty."
        }
      }},
    gender: {type: DataTypes.STRING,
    validate: {
        notEmpty: {
          message: "Gender can not be empty."
        }
      }},
    author_id: {type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          message: "Author ID can not be empty."
        }
      }},
    country_code:{type: DataTypes.STRING,
    validate: {
        notEmpty: {
          message: "Country Code can not be empty."
        }
      }}
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};