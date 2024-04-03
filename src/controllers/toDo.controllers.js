const catchError = require('../utils/catchError');
const ToDo = require('../models/ToDo');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    const todos = await ToDo.find();
    return res.json(todos);
});

const create = catchError(async(req, res) => {
    const { title, isCompleted, description, userId } = req.body;
    const toDo = await ToDo.create({ title, isCompleted, description, userId });
    const user = await User.findById(userId);
    user.toDos.push(toDo.id);
    await user.save();
    return res.status(201).json(toDo);
})

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const toDo = await ToDo.findById(id);
    if (!toDo) return res.status(404).json({ message: 'ToDo not found'});
    return res.json(toDo);
})

module.exports = {
    getAll,
    create,
    getOne,
}