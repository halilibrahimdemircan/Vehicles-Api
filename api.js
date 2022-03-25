const api = require("express").Router();
const carRoutes = require("./routes/carRoutes");
const boatRoutes = require("./routes/boatRoutes");
const busRoutes = require("./routes/busRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");



api.use('/car', carRoutes);
api.use('/boat', boatRoutes);
api.use('/bus', busRoutes);
api.use('/vehicle', vehicleRoutes);




module.exports = api;