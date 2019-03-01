var mongoose = require('mongoose');

/**
 * *DEFAULT*
 */
var ShotSchema = new mongoose.Schema({
    name : {type: String, required: true},
    date : {type: Date}
}, { timestamps: true, upsert:true})

mongoose.model('Shot', ShotSchema);