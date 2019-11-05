'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn(
      'page',
      'categoryId',
      {
        type: Sequelize.INTEGER,
        references: {
          model: 'category',
          key: 'id',
        },
      },
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('page', 'categoryId');
  },
};
