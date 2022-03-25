const express = require('express');
const router = express.Router();
const vehicleController = require('../controllers/vehicleController');

router
    .get('/:vehicle_type/:color', vehicleController.getVehiclesByColor)
    .post('/:vehicle_type/:id', vehicleController.updateVehicleById)
    .delete('/:vehicle_type/:id', vehicleController.deleteVehicleById)
    .post('/:vehicle_type/', vehicleController.createVehicle);


module.exports = router;