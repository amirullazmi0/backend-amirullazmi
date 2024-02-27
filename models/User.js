'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // User.hasMany(models.kamar, {
            //     foreignKey: 'kd_User',
            //     sourceKey: 'kd_User',
            // });
        }
    }
    User.init({
        firstName: {
            type: DataTypes.STRING
        },
        firstName: DataTypes.STRING,
        lastName: DataTypes.ENUM('0', '1'),
    }, {
        sequelize,
        modelName: 'User',
        tableName: 'users'
    });
    return User;
};