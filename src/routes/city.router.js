const { getAll, create } = require('../controllers/city.controllers');
const express = require('express');

const cityRouter = express.Router();

cityRouter.route('/cities')
    .get(getAll)
    .post(create);

module.exports = cityRouter;