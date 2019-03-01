var mongoose = require('mongoose');

/**
 * *DEFAULT*
 */
var StateSchema = new mongoose.Schema({
    name : {type: String},
    country : {type: mongoose.Schema.Types.ObjectId, ref:"Country"}

}, { timestamps: true, upsert:true})

mongoose.model('State', StateSchema);
