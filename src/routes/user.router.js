const { getAll, create } = require('../controllers/user.controllers');
const express = require('express');

const userRouter = express.Router();

userRouter.route('/users')
    .get(getAll)
    .post(create);


module.exports = userRouter;