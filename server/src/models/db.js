const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize("socialmedia", "root", "123456789", {
  host: "localhost",
  logging: false,
  dialect: "mysql",
});
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.user = require("./userModel")(sequelize, DataTypes);
db.post = require("./postModel")(sequelize, DataTypes);
//USER CAN POST MANY POSTS
db.user.hasMany(db.post,{onDelete:"CASCADE"});
db.post.belongsTo(db.user,{onDelete:"CASCADE"});
db.sequelize.sync({ force: false });

module.exports = db;
