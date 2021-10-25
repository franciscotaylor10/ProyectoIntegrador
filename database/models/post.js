module.exports = (sequelize, DataTypes) => {

    const alias = 'Post';
    
    const cols ={
        id: {
            autoincrement: true,
            primarykey: true,
            type: DataTypes.INTEGER,
        },
        descripcion:{
            type: DataTypes.STRING,
        },
        imagen:{
            type: DataTypes.STRING,

        },
        fecha:{
           type: DataTypes.DATE 
        },
        users_id: {
            type: DataTypes.INTEGER,
        }
    }
    
    const config = {
        tableName: 'posts',
        timestamps: false,
        underscored: true
    }
    
    const Post = sequelize.define(alias, cols, config)
    
    return Post;
    
    }