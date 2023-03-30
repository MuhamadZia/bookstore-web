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
    // await queryInterface.removeColumn('books','genre')
    return Promise.all([
      queryInterface.changeColumn('books','price', {
        type: 'INTEGER USING CAST("price" as INTEGER)',
        allowNull: false
      }),
      queryInterface.changeColumn('books','rating', {
        type: 'FLOAT USING CAST("rating" as FLOAT)',
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
    // await queryInterface.dropTable('books')
    return Promise.all([
      queryInterface.changeColumn('books','price'),
      queryInterface.changeColumn('books','rating')
    ]);
  }
};
