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
      queryInterface.changeColumn('author_books','author_id', {
        type: 'INTEGER USING CAST("author_id" as INTEGER)',
        allowNull: false
      }),
      queryInterface.changeColumn('author_books','book_id', {
        type: 'INTEGER USING CAST("book_id" as INTEGER)',
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
      queryInterface.changeColumn('author_books','author_id'),
      queryInterface.changeColumn('author_books','book_id')
    ]);
  }
};
