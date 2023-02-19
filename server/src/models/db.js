const {Sequelize, DataTypes}= require("sequelize")
require("dotenv").config();
const sequelize = new Sequelize('socialmedia', 'root',process.env.PASSWORD, {
    host: 'localhost',
    logging:false,
    dialect:"mysql"
  });
  try {
     sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

  const db={}
  db.Sequelize=Sequelize;
  db.sequelize=sequelize
  db.user=require("./userModel")(sequelize,DataTypes)
  db.sequelize.sync({force:false})

module.exports=db