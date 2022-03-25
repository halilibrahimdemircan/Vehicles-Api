const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { Bus } = require('../models');

exports.getBusesByColor = catchAsync(async (req, res, next) => {
    const color = req.params.color;
    const buses = await Bus.findAll({
        where: {
            color: color
        }
    })
    res.status(200).send({
        status: 'success',
        data: buses,
        text: 'Successfully fetched buses'

    });
});

