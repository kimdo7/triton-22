var mongoose = require('mongoose');

var StadiumSchema = new mongoose.Schema({
    name : {type: String, required: true, unique: true},
    city : {type: String},
    country : {type: String},
    zipcode : {type: String},
}, { timestamps: true, upsert:true})

mongoose.model('Stadium', StadiumSchema);
