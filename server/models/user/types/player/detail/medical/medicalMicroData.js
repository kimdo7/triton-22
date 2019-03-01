var mongoose = require('mongoose');

/**
 * *DEFAULT*
 */
var MedicaMicrolSchema = new mongoose.Schema({
    weight: {type: Number },
    height : {type: Number},
    shots : [{type: mongoose.Schema.Types.ObjectId, ref :"Shot"}]
}, { timestamps: true, upsert:true})

mongoose.model('MedicaMicrol', MedicaMicrolSchema);