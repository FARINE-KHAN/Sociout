module.exports = (sequelize, DataTypes) => {
  const like = sequelize.define("like", {
    like: DataTypes.BOOLEAN,
    likeBy: DataTypes.STRING,
  });
  return like;
};
