var mongoose = require('mongoose');

/**
 * *DEFAULT*
 */
var PlayerInfoSchema = new mongoose.Schema({
    footed: { type: String, required: true },
    handed: { type: String, required: true },
    
    
    weight: { type: Number, required: true },
    height: { type: Number, required: true },
}, { timestamps: true, upsert:true})

mongoose.model('PlayerInfo', PlayerInfoSchema);