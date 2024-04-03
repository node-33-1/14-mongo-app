const express = require('express');
const toDoRouter = require('./toDo.router');
const countryRouter = require('./country.router');
const userRouter = require('./user.router');
const cityRouter = require('./city.router');
const router = express.Router();

// colocar las rutas aquí
router.use(toDoRouter);
router.use(countryRouter);
router.use(userRouter);
router.use(cityRouter);

module.exports = router;
