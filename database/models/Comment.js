module.exports = (sequelize, DataTypes) => {

    const alias = 'Comment';
    
    const cols ={
        id: {
            autoincrement: true,
            primarykey: true,
            type: DataTypes.INTEGER,
        },
        comentario:{
            type: DataTypes.STRING,
        },
        fecha:{
           type: DataTypes.DATE 
        },
        post_id:{
            type: DataTypes.INTEGER,  
        },
        users_id: {
            type: DataTypes.INTEGER,
        }
    }
    
    const config = {
        tableName: 'comments',
        timestamps: false,
        underscored: true
    }
    
    const Comment = sequelize.define(alias, cols, config)
    
    return Comment;
    
    }