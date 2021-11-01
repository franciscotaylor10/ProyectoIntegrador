module.exports = (sequelize, DataTypes) => {

    const alias = 'User';
    
    const cols ={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        nombre_de_usuario:{
            type: DataTypes.STRING,
        },
        email:{
            type: DataTypes.STRING,   
        },
        imagen:{
            type: DataTypes.STRING,

        },
        contra:{
            type: DataTypes.STRING,

        },
    }
    
    const config = {
        tableName: 'users',
        timestamps: false,
        underscored: true
    }
    
    const User = sequelize.define(alias, cols, config)
   User.associate=(model)=>{
        User.hasMany(model.Post,{
            as:"posts",
            foreignKey:"users_id"
        })
        User.hasMany(model.Comment,{
            as:"comments",
            foreignKey:"users_id"
        })
        User.hasMany(model.Follower,{
            as:"followers",
            foreignKey:"seguido_id"

        })
        User.hasMany(model.Follower,{
            as:"following",
            foreignKey:"seguidor_id"

        })
    }
    return User;
    
    }