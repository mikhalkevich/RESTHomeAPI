var express = require('express');
var fs = require('fs');
var mtrf = require('../../libs/mtrf');
var one = require('../../libs/name');
var router = express.Router();

router.get('/', function(req, res, next){
    res.render('devices');
});

router.get('/find', function (req, res, next) {
        var json = [];
        //171, 2, 0, 0, (byte)i, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172
        i = parseInt(req.query.chanel);
        var arr = mtrf(2, 0, 0, i, 128, 0, 0, 0, 0, 0, '0-0-0-0');
        res.locals.port.write(arr, function (err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
        });

    res.redirect('/devices');
    /*

    */
});

router.get('/show', function(req, res, next){
    fs.readFile('data.txt', function (err, data) {
        if (err) {
            myError(err, res);
        } else {
            var str = data.toString();
            arr = str.split("\n");
            res.render('devices', {title: 'Найденные устройства', arr: arr});
        }
    });
});

function find(array, value) {
    console.log(array, value);
    for (var i = 0; i < array.length; i++) {
        if (array[i] == value) return i;
    }
    return -1;
}

module.exports = router;
