const mongoose = require('mongoose')
var Country = mongoose.model('Country')

module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @return all categories
     */
    getAll: function (req, res) {
        Country.find().sort({name: 1}).exec(function(err, results){
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All Counties",
                    data: results
                })
        })
    }
}