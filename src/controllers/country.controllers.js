const catchError = require('../utils/catchError');
const Country = require('../models/Country');

const getAll = catchError(async(req, res) => {
    const countries = await Country.find().populate('cities');
    return res.json(countries);
});

const create = catchError(async(req, res) => {
    const country = await Country.create(req.body);
    return res.status(201).json(country);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const country = await Country.findById(id);
    return res.json(country);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Country.findByIdAndDelete(id);
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const country = await Country.findByIdAndUpdate(
        id,
        req.body,
        { new: true },
    )
    return res.json(country);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
}