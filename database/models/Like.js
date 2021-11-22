module.exports = (sequelize, DataTypes) => {

    const alias = 'Like';
    
    const cols ={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        post_id:{
            type: DataTypes.INTEGER,  
        },
        users_id: {
            type: DataTypes.INTEGER,
        },
    }
    
    const config = {
        tableName: 'likes',
        underscored: true,
        timestamps: false
    }
    
    const Like = sequelize.define(alias, cols, config)
    Like.associate=(model)=>{
        Like.belongsTo(model.User,{
            as:"user",
            foreignKey:"users_id"
        })
        Like.belongsTo(model.Post,{
            as:"post",
            foreignKey:"post_id"
        })
    }
    return Like;
    
    }