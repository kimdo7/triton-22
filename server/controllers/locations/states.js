const mongoose = require('mongoose')
var State = mongoose.model('State')

module.exports = {
    /**
     * 
     * @param {*} req 
     * @param {*} res 
     * @return all categories
     */
    getAll: function (req, res) {
        State.find().sort({name: 1}).exec(function(err, results){
            if (err)
                res.json({ message: "Error", error: err })
            else
                res.json({
                    message: "Success",
                    title: "All States",
                    data: results
                })
        })
    }
}