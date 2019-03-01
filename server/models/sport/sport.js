var mongoose = require('mongoose');

/**
 * *DEFAULT*
 */
var SportSchema = new mongoose.Schema({
    name : {type: String, unique: true, required: true},
}, { timestamps: true, upsert:true})

mongoose.model('Sport', SportSchema);
