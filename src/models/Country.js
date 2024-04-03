const mongoose = require('mongoose');
const { Schema } = mongoose;

const countrySchema = new Schema({
    
    name: {
        type: String,
        default: false
    },
    flagUrl: {
        type: String,
        default: false
    },
    population: {
        type: Number,
        default: false
    },
    cities: [{
        type: Schema.Types.ObjectId,
        ref: 'City',
    }],
});

const Country = mongoose.model('Country', countrySchema);
module.exports = Country;
