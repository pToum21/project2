const { Model, DataTypes } = require('sequelize')

const sequelize = require('../config/connection')

class Product extends Model { }

Product.init(
    {
        title: {
            type: DataTypes.STRING
        },
        description: {
            type: DataTypes.TEXT(5000)
        },
        date_created: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        game_name: {
            type: DataTypes.STRING,
        },
        console_name: {
            type: DataTypes.STRING,
        },
        console_brand: {
            type: DataTypes.STRING,
            allowNull: false
        },
        year: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isNumeric: true
            }
        },
        condition: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
            validate: {
                isDecimal: true
            }
        },
        color: {
            type: DataTypes.STRING,
        },
        is_special_edition: {
            type: DataTypes.BOOLEAN,
            allowNull: false
        },
        category_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'category',
                key: 'id'
            }
        },
        user_id: {
            type: DataTypes.STRING,
            references: {
                model: 'user',
                key: 'id'
            }
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'product',
    }
);

module.exports = Product;