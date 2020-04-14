'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    contentname: DataTypes.STRING,
    contenturl: DataTypes.STRING,
    TopicId: DataTypes.INTEGER
  }, {});
  Content.associate = function(models) {
    // associations can be defined here
  };
  return Content;
};