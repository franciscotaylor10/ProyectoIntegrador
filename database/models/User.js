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
    
    return User;
    
    }