module.exports = (sequelize, DataTypes) => {

    const alias = 'Follower';
    
    const cols ={
        id: {
            autoincrement: true,
            primarykey: true,
            type: DataTypes.INTEGER,
        },
        seguidor_id:{
            type: DataTypes.INTEGER,
        },
        seguido_id:{
            type: DataTypes.INTEGER,

        },
    }
    
    const config = {
        tableName: 'followers',
        timestamps: false,
        underscored: true
    }
    
    const Follower = sequelize.define(alias, cols, config)
    
    return Follower;
    
    }