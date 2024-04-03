const mongoose = require('mongoose');
const { Schema } = mongoose;

const toDoSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    isCompleted: {
        type: Boolean,
        required: true,
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    }
});

const ToDo = mongoose.model('ToDo', toDoSchema);
module.exports = ToDo;
