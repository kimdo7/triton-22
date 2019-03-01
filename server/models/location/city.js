var mongoose = require('mongoose');

var CitySchema = new mongoose.Schema({
    city : {type: String},
    country : {type: String, unique: true},
    zipcode : {type: String, unique: true},
}, { timestamps: true, upsert:true})

mongoose.model('City', CitySchema);
