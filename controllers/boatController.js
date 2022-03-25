const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { Boat } = require('../models');

exports.getCarsByColor = catchAsync(async (req, res, next) => {
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
