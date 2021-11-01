module.exports = (sequelize, DataTypes) => {

    const alias = 'Follower';

    const cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.INTEGER,
        },
        seguidor_id: {
            type: DataTypes.INTEGER,
        },
        seguido_id: {
            type: DataTypes.INTEGER,

        },
    }

    const config = {
        tableName: 'followers',
        timestamps: false,
        underscored: true
    }

    const Follower = sequelize.define(alias, cols, config)
    Follower.associate = (model) => {
        Follower.belongsTo(model.User, {
            as: "followers",
            foreignKey: "seguido_id"

        })
        Follower.belongsTo(model.User, {
            as: "following",
            foreignKey: "seguidor_id"

        })
    }
    return Follower;

}