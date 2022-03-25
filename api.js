const api = require("express").Router();
const carRoutes = require("./routes/carRoutes");
const vehicleRoutes = require("./routes/vehicleRoutes");



api.use('/car', carRoutes);
api.use('/vehicle', vehicleRoutes);




module.exports = api;