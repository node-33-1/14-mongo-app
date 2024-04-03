const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    toDos: [{
        type: Schema.Types.ObjectId,
        ref: 'ToDo',
    }],
});

const User = mongoose.model('User', userSchema);
module.exports = User;
