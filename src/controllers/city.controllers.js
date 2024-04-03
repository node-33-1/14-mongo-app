const catchError = require('../utils/catchError');
const City = require('../models/City');
const Country = require('../models/Country');

const getAll = catchError(async(req, res) => {
    const cities = await City.find().populate('countryId');
    return res.json(cities);
});

const create = catchError(async(req, res) => {
    const city = await City.create(req.body);
    const country = await Country.findById(req.body.countryId);
    country.cities.push(city.id);
    await country.save();
    return res.status(201).json(city);
})

module.exports = {
    getAll,
    create,
}