var express = require('express');
var router = express.Router();
var fs = require('fs');
var hex = require('../../libs/hex');
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
            var arr_hex = [];
            arrs.forEach(function(element) {
                var art = element.split(",");
                if(art[2]){
                    arr_hex.push(hex(art[2]));
                }
                arr.push(art[2]);
                arr_name.push(art[1]);
                arr_chanel.push(art[0]);
            });
            console.log(arr_hex);
            res.render('index', {title: 'Noolite-F', arr: arr, arr_name: arr_name, arr_chanel: arr_chanel, arr_hex: arr_hex});
        }
    });


});

module.exports = router;
