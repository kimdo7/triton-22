var countries = require("../controllers/locations/countries")
module.exports = function (app) {
    app.get("/countries", function(req, res){
        countries.getAll(req, res)
    })
}