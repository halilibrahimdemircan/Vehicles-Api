const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { vehicledb } = require('../models/db')
const { Car } = require('../models');



exports.getVehiclesByColor = catchAsync(async (req, res, next) => {
    const vehicle_type = req.params.vehicle_type;
    const color = req.params.color;

    if (vehicle_type === "car") {

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
    } else if (vehicle_type === "bus") {

    } else if (vehicle_type === "boat") {

    } else {
        return next(new AppError(400, 'vehicle_type must be car, bus or boat', "invalid input"));
    }
});

exports.updateVehicleById = catchAsync(async (req, res, next) => {
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

exports.deleteVehicleById = catchAsync(async (req, res, next) => {
    const id = req.params.id;

    const car = await Car.destroy({ where: { id: id } });

    res.status(204).send({
        status: 'success',
        data: null,
    });
});

exports.createVehicle = catchAsync(async (req, res, next) => {
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