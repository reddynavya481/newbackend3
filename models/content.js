'use strict';
module.exports = (sequelize, DataTypes) => {
  const Content = sequelize.define('Content', {
    contentname: DataTypes.STRING,
    contenturl: DataTypes.STRING,
    TopicId: DataTypes.INTEGER,
    status: DataTypes.BOOLEAN,
    userId:DataTypes.INTEGER
  }, {});
  Content.associate = function (models) {
    // associations can be defined here
    models.Topic.hasMany(Content, { foreignKey: 'topicFK' })
  };
  return Content;
};