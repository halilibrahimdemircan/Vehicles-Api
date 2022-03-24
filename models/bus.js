"use strict";

const Sequelize = require("sequelize");
const { vehicledb } = require("./db");

module.exports = vehicledb.define(
    "bus",
    {
        color: {
            type: Sequelize.TEXT,
            allowNull: true,
        }
    },
    {
        timestamp: true
    }
);