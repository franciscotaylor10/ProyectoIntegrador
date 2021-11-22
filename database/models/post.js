module.exports = (sequelize, DataTypes) => {

    const alias = 'Post';
    
    const cols ={
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        descripcion:{
            type: DataTypes.STRING,
        },
        imagen:{
            type: DataTypes.STRING,

        },
        users_id: {
            type: DataTypes.INTEGER,
        },
        createdAt: {
            type: DataTypes.DATE
        },
        updatedAt: {
            type: DataTypes.DATE
        }
    }

    const config = {
        tableName: 'posts',
        underscored: true,
        timestamps:false
    }
    
    const Post = sequelize.define(alias, cols, config)
    Post.associate=(model)=>{
        Post.belongsTo(model.User,{
            as:"user",
            foreignKey:"users_id"
        })
        Post.hasMany(model.Comment,{
            as:"comments",
            foreignKey:"post_id"
        })
            Post.hasMany(model.Like,{
                as:"likes",
                foreignKey:"post_id"
            })
    }
    return Post;
    
    }