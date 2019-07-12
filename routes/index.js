var express = require('express');
var router = express.Router();
var fs = require('fs');
router.get('/', function (req, res, next) {
    var arr = [];
    fs.readFile('data.txt', function (err, data) {
        if (err) {
            myError(err, res);
        } else {
            var str = data.toString();
            arrs = str.split("\n");
            var arr = [];
            var arr_name = [];
            arrs.forEach(function(element) {
                var art = element.split(" ");
                arr.push(art[2]);
                arr_name.push(art[1]);

            });
            res.render('index', {title: 'RESTHomeApi', arr: arr, arr_name: arr_name});
        }
    });

});

module.exports = router;
