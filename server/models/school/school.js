var mongoose = require('mongoose');

var SchoolSchema = new mongoose.Schema({
    name : {type: String, unique: true, required: true},
    type : {type: String, unique: true, required: true},

}, { timestamps: true, upsert:true})

mongoose.model('School', SchoolSchema);