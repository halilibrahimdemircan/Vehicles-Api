const express = require('express');
const router = express.Router();
const busController = require('../controllers/busController');

router
    .get('/:color', busController.getBusesByColor)



module.exports = router;