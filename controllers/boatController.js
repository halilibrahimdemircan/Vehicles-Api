const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { Boat } = require('../models');

exports.getBoatsByColor = catchAsync(async (req, res, next) => {
    const color = req.params.color;
    const boats = await Boat.findAll({
        where: {
            color: color
        }
    })
    res.status(200).send({
        status: 'success',
        data: boats,
        text: 'Successfully fetched boats'

    });
});

exports.createBoat = catchAsync(async (req, res, next) => {
    const color = req.body.color;

    const boat = await Boat.create({
        color: color,
    });

    res.status(200).send({
        status: 'success',
        data: boat,
    });
})