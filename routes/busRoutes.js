const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');

router
    .get('/:color', busController.getBusesByColor)
    .post('/', busController.createBus)



module.exports = router;