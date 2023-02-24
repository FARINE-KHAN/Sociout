module.exports=(sequelize,DataTypes)=>{

    const user = sequelize.define('user', {
      // Model attributes are defined here
      profileImage:{
        type: DataTypes.STRING,
      },
      userName:{
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      fullName: {
        type: DataTypes.STRING,
        allowNull: false
      },
      email: {
        type: DataTypes.STRING,
         allowNull :false
      },
      phone: {
        type: DataTypes.STRING,
        allowNull :false

      },
      password: {
        type: DataTypes.STRING,
        allowNull :false
      }
    }, {
    });

    return user;
    }