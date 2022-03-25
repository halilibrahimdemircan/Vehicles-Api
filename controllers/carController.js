const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { vehicledb } = require('../models/db')
const { Car } = require('../models');

exports.getCarsByColor = catchAsync(async (req, res, next) => {
    const color = req.params.color;
    const cars = await Car.findAll({
        where: {
            color: color
        }
    })
    res.status(200).send({
        status: 'success',
        data: cars,
        text: 'Successfully fetched cars'

    });
});

exports.updateCarById = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const headlight = req.body.headlight;
    const wheel = req.body.wheel;
    const color = req.body.color;

    if (!(headlight == "on" || headlight == "off")) {
        return next(new AppError(400, 'headlight must be on or off', "invalid input"));

    }
    const car = await Car.update({

        headlight: headlight == "on" ? true : false,
        wheel: wheel,
        color: color
    },
        {
            where: { id: id },
            returning: true
        })

    res.status(200).send({
        status: 'success',
        data: car,
    });
});

exports.deleteCarById = catchAsync(async (req, res, next) => {
    const id = req.params.id;

    const car = await Car.destroy({ where: { id: id } });

    res.status(204).send({
        status: 'success',
        data: null,
    });
});

exports.createCar = catchAsync(async (req, res, next) => {
    const color = req.body.color;
    const headlight = req.body.headlight;
    const wheel = req.body.wheel;
    // const data = {
    // }

    // if (wheel !== undefined) {
    //     data[wheel] = wheel
    // }

    if (!(headlight == "on" || headlight == "off" || headlight == undefined)) {
        return next(new AppError(400, 'headlight must be on or off', "invalid input"));

    }
    const car = await Car.create({
        color: color,
        headlight: headlight == "on" ? true : false,
        wheel: wheel
    })
    res.status(200).send({
        status: 'success',
        data: car,
    });
}
);