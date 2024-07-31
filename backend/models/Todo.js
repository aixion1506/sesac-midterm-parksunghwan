const todoModel = (sequelize, DataTypes) => {
    const todo = sequelize.define('todo', {
        id:  {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        title: {
            type: DataTypes.STRING(255),
            allowNull: false
        },
        done: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
            defaultValue: false
        },
    },
    {
        freezeTableName: true,
        timestamps: true,
    }
    );
    return todo;
}

module.exports = todoModel;