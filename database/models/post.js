module.exports = (sequelize, DataTypes) => {

const alias = 'post';

const cols ={
    id: {
        autoincrement: true,
        primarykey: true,
        type: DataTypes.INTEGER,
    },
    user_id: {
        type: DataTypes.INTEGER,
    },
    contenido: {
        type:DataTypes.STRING,
    }
}

const config = {
    tableName: 'post',
    timestamps: false,
    underscored: true
}

const post = sequelize.define(alias, cols, config)

return post;

}