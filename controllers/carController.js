const catchAsync = require('./../utils/catchAsync');
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



// exports.createCar = catchAsync(async (req, res, next) => {

//     await test();
//     const car = await vehicledb.query(`
//     INSERT INTO car 
//     (color, created_at, updated_at)
//     VALUES 
//     ('black', 1, Now()) 
//     `);
//     console.log(car, "aaaaaaaa");
//     res.status(204).send({
//         status: 'success',
//         data: null
//     });
// });

exports.updateCarById = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    console.log(req.body, "req.body");
    const headlight = req.body.headlight;
    console.log(headlight, "headlight");
    if (!(headlight == "on" || headlight == "off")) {
        return next(new AppError(400, 'headlight must be on or off', "invalid input"));

    }
    const car = await Car.update({

        headlight: headlight == "on" ? true : false
    },
        {
            where: { id: id },
            returning: true
        }

    )


    res.status(200).send({
        status: 'success',
        data: car,
    });
});

exports.deleteCarById = catchAsync(async (req, res, next) => {
    const id = req.params.id;

    const car = await Car.destroy({ where: { id: id } });
    console.log(car, "Car");

    res.status(204).send({
        status: 'success',
        data: null,
    });
});

exports.createCar = catchAsync(async (req, res, next) => {
    const color = req.body.color;
    const headlight = req.body.headlight;
    console.log(req.body, "req.body");
    if (!(headlight == "on" || headlight == "off" || headlight == undefined)) {
        return next(new AppError(400, 'headlight must be on or off', "invalid input"));

    }
    const car = await Car.create({
        color: color,
        headlight: headlight == "on" ? true : false
    })
    res.status(200).send({
        status: 'success',
        data: car,
    });
}
);