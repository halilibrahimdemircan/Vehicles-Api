const Sequelize = require("sequelize");

// creating the auth url
const url = process.env.VEHICLE_DB_URL;
// creating the db instance
const vehicledb = new Sequelize(url, {

    logging: false,
    dialect: 'postgres',
    define: {
        underscored: true,
        freezeTableName: true,
        timestamps: true
    },
});

module.exports = { vehicledb };
// requring models to create if necessary
require("./index");