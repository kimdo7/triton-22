var mongoose = require('mongoose');

var UserSchema = new mongoose.Schema({
    first_name: {type: String, required: true, minlength: 2 },
    last_name: {type: String, required: true, minlength: 2 },
    nick_name: {type: String, minlength: 2 },
    sex: {type: String, required: true },
    dob: {type: Date, required: true },
    is_freeland: {type: Boolean, default: false}
}, { timestamps: true, upsert:true})

mongoose.model('User', UserSchema);

module.export = UserSchema