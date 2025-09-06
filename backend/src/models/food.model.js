const mongoose = require('mongoose');
const foodSchema = new mongoose.Schema({
    name : {
        type : String,
        required : true,
    },
    video : {
        type : String,
        required : true,
    },
    description : {
        type : String,
        required : true,
    },
    foodPartner : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'foodpartner',
        required: true,
    }
});

module.exports = mongoose.models.Food || mongoose.model('Food', foodSchema);