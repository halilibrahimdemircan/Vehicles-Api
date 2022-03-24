const express = require('express');
const router = express.Router();
const carController = require('./../controllers/carController');

router
    .get('/:color', carController.getCarsByColor)
    .post('/:id', carController.updateCarById)
    .delete('/:id', carController.deleteCarById)
    .post('/', carController.createCar);


module.exports = router;