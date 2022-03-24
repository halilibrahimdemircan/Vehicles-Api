const api = require("express").Router();
const carRoutes = require("./routes/carRoutes");


api.use('/car', carRoutes);




module.exports = api;