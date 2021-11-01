module.exports = (sequelize, DataTypes) => {

    const alias = 'Comment';
    
    const cols ={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        comentario:{
            type: DataTypes.STRING,
        },
        post_id:{
            type: DataTypes.INTEGER,  
        },
        users_id: {
            type: DataTypes.INTEGER,
        },
        created_at:{
            type: DataTypes.DATE 
         },
         updated_at:{
            type: DataTypes.DATE 
         },
    }
    
    const config = {
        tableName: 'comments',
        underscored: true
    }
    
    const Comment = sequelize.define(alias, cols, config)
    Comment.associate=(model)=>{
        Comment.belongsTo(model.User,{
            as:"user",
            foreignKey:"users_id"
        })
        Comment.belongsTo(model.Post,{
            as:"post",
            foreignKey:"post_id"
        })
    }
    return Comment;
    
    }