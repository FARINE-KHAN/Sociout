module.exports=(sequelize,DataTypes)=>{

    const post = sequelize.define('post', {
      // Model attributes are defined here
      postImage:{
        type: DataTypes.STRING
      },
      caption: {
        type: DataTypes.STRING
      },
      // userId: {
      //   type: DataTypes.INTEGER
      // }
    },{
      // Other model options go here
    //   tableName: 'users',
    
    });

    return post;
    }