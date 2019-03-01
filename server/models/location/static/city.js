var mongoose = require('mongoose');

var CitySchema = new mongoose.Schema({
    city : {type: String},
    state : {type: String},
    country : {type: String},
    zipcode : {type: String},
}, { timestamps: true, upsert:true})

mongoose.model('City', CitySchema);
