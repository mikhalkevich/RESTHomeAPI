var express = require('express');
var router = express.Router();
var fs = require('fs');
router.get('/', function (req, res, next) {
    debugger;
    var arr = [];

    fs.readFile('data.txt', function (err, data) {
        if (err) {
            myError(err, res);
        } else {
            var str = data.toString();
            arrs = str.split("\n");
            var arr = [];
            var arr_name = [];
            var arr_chanel = [];
            arrs.forEach(function(element) {
                var art = element.split(",");
                arr.push(art[2]);
                arr_name.push(art[1]);
                arr_chanel.push(art[0]);
            });
            res.render('index', {title: 'NooliteF', arr: arr, arr_name: arr_name, arr_chanel: arr_chanel});
        }
    });


});

module.exports = router;
