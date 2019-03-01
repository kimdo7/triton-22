var mongoose = require('mongoose');

/**
 * *DEFAULT*
 */
var PlayerMicroInfoSchema = new mongoose.Schema({
    
}, { timestamps: true, upsert:true})

mongoose.model('PlayerMicroInfo', PlayerMicroInfoSchema);