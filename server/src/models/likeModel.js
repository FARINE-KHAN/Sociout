module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define("like", {
    like: DataTypes.INTEGER,
    likeBy: DataTypes.STRING,
  });
  return like;
};
