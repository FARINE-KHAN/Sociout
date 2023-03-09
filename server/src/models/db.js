const { Sequelize, DataTypes } = require("sequelize");
require("dotenv").config();
const sequelize = new Sequelize("sociout", "muhazAhmed", "muhaz-DB", {
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
db.comment = require("./commentModel")(sequelize, DataTypes);
db.like = require("./likeModel")(sequelize, DataTypes);

//USER CAN POST MANY POSTS
db.user.hasMany(db.post,{onDelete:"CASCADE"});
db.post.belongsTo(db.user,{onDelete:"CASCADE"});
db.user.hasMany(db.comment,{onDelete:"CASCADE"});
db.comment.belongsTo(db.user,{onDelete:"CASCADE"});
db.post.hasMany(db.comment,{onDelete:"CASCADE"});
db.comment.belongsTo(db.post,{onDelete:"CASCADE"});

db.post.hasMany(db.like,{onDelete:"CASCADE"});
db.like.belongsTo(db.post,{onDelete:"CASCADE"});

db.user.hasMany(db.like,{onDelete:"CASCADE"});
db.like.belongsTo(db.user,{onDelete:"CASCADE"});

db.sequelize.sync({ force: false });

module.exports = db;
