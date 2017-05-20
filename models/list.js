module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define("List", {
    userid: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    category: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    link: {
      type: DataTypes.STRING,
      allowNull: true
    },
    ispublic: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      default: true
    }
  });
  return List;
};
