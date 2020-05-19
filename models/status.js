'use strict';
module.exports = (sequelize, DataTypes) => {
  const Status = sequelize.define('Status', {
    statusValue: DataTypes.BOOLEAN,
    contentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    username: DataTypes.STRING
  }, {});
  Status.associate = function (models) {
    // associations can be defined here
    models.Content.hasMany(Status)
    models.User.hasMany(Status)
  };
  return Status;
};