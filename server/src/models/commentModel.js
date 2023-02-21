module.exports = (sequelize,DataTypes)=>{const comment = sequelize.define('comment',{
    comment : DataTypes.STRING,
    commentBy :DataTypes.STRING
    
 })
 return comment;
}


