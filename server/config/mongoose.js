var path = require('path');
var fs   = require("fs")

/**
 * *create* a variable that points to the models folder
 */
var models_path = path.join(__dirname, './../models');

/**
 * *read all of the files* in the models_path and require (run) each of the javascript files
 */
// 

readFiles(models_path)

function readFiles(curr_path){
    fs.readdirSync(curr_path).forEach(function (file) {
        if (file.indexOf('.js') >= 0) {
            console.log(curr_path + '/' + file)
            // require the file (this runs the model file which registers the schema)
            require(curr_path + '/' + file);
        }else{
            readFiles(curr_path + '/' + file)
        }
    })
}
