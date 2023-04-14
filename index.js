const fs = require("fs");

let ls = function (dirpath) {
    let contents = fs.readdirSync(dirpath, {withFileTypes: true});

    for (let item of contents) {
        console.log(item);
    }
    console.log('test')
}


let cat = function(filepath) {
    let contents = fs.readFileSync(filepath, {encoding: "utf-8"});
    console.log(contents);
    return contents;
}


exports.ls = ls;
exports.cat = cat;
