'use strict';
module.exports = (sequelize, DataTypes) => {
  const Topic = sequelize.define('Topic', {
    topicname: DataTypes.STRING,
    topicurl: DataTypes.STRING,
    courseId: DataTypes.INTEGER
  }, {});
  Topic.associate = function (models) {
    // associations can be defined here
    models.Course.hasMany(Topic, { foreignKey: 'courseFK' })
  };
  return Topic;
};