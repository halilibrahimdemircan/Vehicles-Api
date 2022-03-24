"use strict";

const Sequelize = require("sequelize");
const { vehicledb } = require("./db");

module.exports = vehicledb.define(
    "car",
    {
        color: {
            type: Sequelize.TEXT,
            allowNull: true,

        },
        headlight: {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
        },
        wheel: {
            type: Sequelize.TEXT,
            allowNull: true,
        },
    },
    {
        timestamp: true
    }
);