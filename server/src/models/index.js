const Sequelize = require('sequelize');

const env = process.env.NODE_ENV || 'development';
const config = require('../config/config.json')[env];

const sequelize = new Sequelize(config);

const commonConfig = {
  freezeTableName: true,
  timestamps: false,
};

const Category = sequelize.define('category',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
  },
  commonConfig);

const Page = sequelize.define('page',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING, 
    },
    jsFile: {
      type: Sequelize.STRING,
    },
    templateFile: {
      type: Sequelize.STRING,
    },
    categoryId: {
      type: Sequelize.INTEGER,
      references: {
        model: Category,
        key: 'id',
      },
    },
  },
  commonConfig);

module.exports = {
  sequelize,
  Category,
  Page,
};
