const mongoose = require('mongoose');
const { Schema } = mongoose;

const citySchema = new Schema({
    name: {
        type: String,
		required: true
    },
    countryId: {
        type: Schema.Types.ObjectId,
        ref: 'Country',
    }
});

const City = mongoose.model('City', citySchema);
module.exports = City;
