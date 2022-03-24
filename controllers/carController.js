const catchAsync = require('./../utils/catchAsync');
const AppError = require('../utils/AppError');
const { vehicledb } = require('../models/db')

exports.getCarById = catchAsync(async (req, res, next) => {
    res.status(204).send({
        status: 'success',
        data: null
    });
});

exports.createCar = catchAsync(async (req, res, next) => {

    await test();
    const car = await vehicledb.query(`
    INSERT INTO car 
    (color, created_at, updated_at)
    VALUES 
    ('black', 1, Now()) 
    `);
    console.log(car, "aaaaaaaa");
    res.status(204).send({
        status: 'success',
        data: null
    });
});