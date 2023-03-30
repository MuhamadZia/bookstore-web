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
      author.belongsToMany(models.book, 
        {
          through:models.author_book,
          foreignKey:'author_id',
          uniqueKey:'book_id',
        }
        )
    }
  }
  author.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    author_id: DataTypes.STRING,
    country_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'author',
  });
  return author;
};