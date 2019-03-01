var path = require('path');
var fs = require('fs');
var csv = require("fast-csv")
const mongoose = require('mongoose')

var Country = mongoose.model('Country')

var models_path = path.join(__dirname, "./../../../static/csv/countries.csv");
var stream = fs.createReadStream(models_path);

var dict = {}
var csvStream = csv()
    .on("data", function (data) {
        //  console.log(data);

        /**
         * *temp[0]* is country code
         * *temp[1]* is country name
         */
        dict = data.map(str => {
            var items = str.split("|")

            return {
                "code": items[0],
                "name": items[1]
            }
        });
    })
    .on("end", function () {
        /**
         * *ADD* To DB
         */
        Country.create(dict, function (err) {
            if (err) 
                console.log(err)
        })
    });

stream.pipe(csvStream);