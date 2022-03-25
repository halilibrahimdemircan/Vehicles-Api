const express = require('express');
const router = express.Router();
const boatController = require('../controllers/boatController');

router
    .get('/:color', boatController.getBoatsByColor)



module.exports = router;