var mongoose = require('mongoose');

/**
 * need to *VALIDATE* @name and @year is *UNIQUE*
 */
var CoachLicensetSchema = new mongoose.Schema({
    name : {type: String},
    level : {type: Number},
    year : {type: Number},
}, { timestamps: true, upsert:true})

mongoose.model('CoachLicense', CoachLicensetSchema);