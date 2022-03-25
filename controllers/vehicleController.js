const catchAsync = require('../utils/catchAsync');
const AppError = require('../utils/AppError');
const { Car, Bus, Boat } = require('../models');



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

        const buses = await Bus.findAll({
            where: {
                color: color
            }
        })
        res.status(200).send({
            status: 'success',
            data: buses,
            text: 'Successfully fetched buses'
        })

    } else if (vehicle_type === "boat") {
        const boats = await Boat.findAll({
            where: {
                color: color
            }
        })
        res.status(200).send({
            status: 'success',
            data: boats,
            text: 'Successfully fetched boats'
        })

    } else {
        return next(new AppError(400, 'vehicle_type must be car, bus or boat', "invalid input"));
    }
});

exports.updateVehicleById = catchAsync(async (req, res, next) => {


    const vehicle_type = req.params.vehicle_type;
    const id = req.params.id;
    const headlight = req.body.headlight;
    const wheel = req.body.wheel;
    const color = req.body.color;



    if (!(headlight == "on" || headlight == "off")) {
        return next(new AppError(400, 'headlight must be on or off', "invalid input"));

    }

    if (vehicle_type === "car") {
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
    } else if (vehicle_type === "bus") {

        const bus = await Bus.update({
            color: color
        },
            {
                where: { id: id },
                returning: true
            })

        res.status(200).send({
            status: 'success',
            data: bus,
        });
    } else if (vehicle_type === "boat") {

        const boat = await Boat.update({
            color: color
        },
            {
                where: { id: id },
                returning: true
            })

        res.status(200).send({
            status: 'success',
            data: boat,
        });
    } else {
        return next(new AppError(400, 'vehicle_type must be car, bus or boat', "invalid input"));
    }


});

exports.deleteVehicleById = catchAsync(async (req, res, next) => {
    const vehicle_type = req.params.vehicle_type;
    const id = req.params.id;

    if (vehicle_type === "car") {
        const car = await Car.destroy({ where: { id: id } });

        res.status(204).send({
            status: 'success',
            data: null,
        });
    } else if (vehicle_type === "bus") {
        const bus = await Bus.destroy({ where: { id: id } });

        res.status(204).send({
            status: 'success',
            data: null,
        });
    } else if (vehicle_type === "boat") {
        const boat = await Boat.destroy({ where: { id: id } });

        res.status(204).send({
            status: 'success',
            data: null,
        });
    } else {
        return next(new AppError(400, 'vehicle_type must be car, bus or boat', "invalid input"));
    }


});

exports.createVehicle = catchAsync(async (req, res, next) => {
    const color = req.body.color;
    const headlight = req.body.headlight;
    const wheel = req.body.wheel;
    const vehicle_type = req.params.vehicle_type;

    if (!(headlight == "on" || headlight == "off" || headlight == undefined)) {
        return next(new AppError(400, 'headlight must be on or off', "invalid input"));

    }

    if (vehicle_type === "car") {
        const car = await Car.create({
            color: color,
            headlight: headlight == "on" ? true : false,
            wheel: wheel
        })
        res.status(200).send({
            status: 'success',
            data: car,
        });
    } else if (vehicle_type === "bus") {
        const bus = await Bus.create({
            color: color
        })
        res.status(200).send({
            status: 'success',
            data: bus,
        });
    } else if (vehicle_type === "boat") {
        const boat = await Boat.create({
            color: color
        })
        res.status(200).send({
            status: 'success',
            data: boat,
        });
    } else {
        return next(new AppError(400, 'vehicle_type must be car, bus or boat', "invalid input"));
    }
}
);