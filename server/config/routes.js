var countries = require("../controllers/locations/countries")
var states = require("../controllers/locations/states")
module.exports = function (app) {
    app.get("/countries", function(req, res){
        countries.getAll(req, res)
    })

    app.get("/states", function(req, res){
        states.getAll(req, res)
    })
}