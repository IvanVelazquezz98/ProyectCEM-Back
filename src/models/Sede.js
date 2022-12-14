const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = sequelize => {
    // defino el modelo
    sequelize.define("sede", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV1,
            
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
            primaryKey: true
        }
    });
};
