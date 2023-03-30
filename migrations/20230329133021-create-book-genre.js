'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    return Promise.all([
      queryInterface.changeColumn('book_genres','book_id', {
        type: 'INTEGER USING CAST("book_id" as INTEGER)',
        allowNull: false
      }),
      queryInterface.changeColumn('book_genres','genre_id', {
        type: 'INTEGER USING CAST("genre_id" as INTEGER)',
        allowNull: false
      })
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    return Promise.all([
      queryInterface.changeColumn('book_genres','book_id'),
      queryInterface.changeColumn('book_genres','genre_id')
    ]);
  }
};
