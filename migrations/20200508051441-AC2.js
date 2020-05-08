'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    

    return queryInterface.addConstraint('Contents', ['topicFK'], {
      type: 'foreign key',
      name: 'topicId',
      references: {
        table: 'Topics',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
};
