var path = require('path');
var fs = require('fs');
var csv = require("fast-csv")
const mongoose = require('mongoose')

var State = mongoose.model('State')

var models_path = path.join(__dirname, "./../../../static/csv/us_cities_states_counties.csv");
var stream = fs.createReadStream(models_path);

var dict = []
var csvStream = csv()
    .on("data", function (data) {
        //  console.log(data);

        /**
         * *temp[0]* is country code
         * *temp[1]* is country name
         */

        var states = data.reduce(function(acc, cur) {
            var items = cur.split("|")
            if (items[1] != undefined && items[2] != undefined)
                acc[items[1]] = items[2];
            return acc;
          }, {});
        
        dict = Object.keys(states).reduce(function (previous, key) {
            previous.push({
                "code" : key,
                "name" : states[key] 
            })
            return previous
        }, []);

    })
    .on("end", function () {
        /**
         * *ADD* To DB
         */
        // console.log(dict)
        State.create(dict, function (err) {
            if (err) 
                console.log(err)
        })
    });

stream.pipe(csvStream);

