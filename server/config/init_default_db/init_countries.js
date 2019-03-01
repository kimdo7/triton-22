var path = require('path');
var fs = require('fs');
var csv = require("fast-csv")
const mongoose = require('mongoose')

var Country = mongoose.model('Country')

var models_path = path.join(__dirname, "./../../../static/csv/countries.csv");
var stream = fs.createReadStream(models_path);


var csvStream = csv()
    .on("data", function (data) {
        //  console.log(data);

        /**
         * *temp[0]* is country code
         * *temp[1]* is country name
         */
        for (var i in data) {
            var temp = data[i].split("|")
            // console.log(temp[0], temp[1])

            /**
             * *ADD* To DB
             */
            Country.create({code: temp[0], name: temp[1]}, function(err){
                if (err){
                    // console.log(err)
                    console.log(temp[0])
                }
            })

        }
    })
    .on("end", function () {
        console.log("done");
    });

stream.pipe(csvStream);