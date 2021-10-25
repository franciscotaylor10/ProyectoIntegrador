module.exports = (sequelize, DataTypes) => {

    const alias = 'User';
    
    const cols ={
        id: {
            autoincrement: true,
            primarykey: true,
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
        fecha:{
           type: DataTypes.DATE 
        },
        numero_telefono: {
            type: DataTypes.INTEGER,
        }
    }
    
    const config = {
        tableName: 'users',
        timestamps: false,
        underscored: true
    }
    
    const User = sequelize.define(alias, cols, config)
    
    return User;
    
    }