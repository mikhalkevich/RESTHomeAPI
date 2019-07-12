var express = require('express');
var fs = require('fs');
var mtrf = require('../libs/mtrf');
var one = require('../libs/name');
var router = express.Router();

router.get('/', function (req, res, next) {


    fs.readFile('data.txt', function (err, data) {
        var json = [];
        for (var i = 0; i < 64; i++) {
            //171, 2, 0, 0, (byte)i, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172
            var arr = mtrf(2, 0, 0, i, 128, 0, 0, 0, 0, 0, '0-0-0-0');
            res.locals.port.write(arr, function (err) {
                if (err) {
                    return console.log('Error on write: ', err.message);
                }
            });
            var por = res.locals.port.read([]);
            if (por) {
                if (por != undefined) {
                    console.log(por);
                    var b = 0;
                    for (var a = 1; a < 64; a++) {
                        var strs = por[b] + '-' + por[1 + b] + '-' + por[2 + b] + '-' + por[3 + b] + '-' + por[4 + b] + '-' + por[5 + b] + '-' + por[6 + b] + '-' + por[7 + b] + '-' + por[8 + b] + '-' + por[9 + b] + '-' + por[10 + b] + '-' + por[11 + b] + '-' + por[12 + b] + '-' + por[13 + b] + '-' + por[14 + b] + '-' + por[15 + b] + '-' + por[16 + b];
                        var jsn2 = one(por[7+b]) + ' ' + por[11 + b] + '-' + por[12 + b] + '-' + por[13 + b] + '-' + por[14 + b];
                        if (por[b]) {
                            var arr = [];
                            if (err) {
                                myError(err, res);
                            } else {
                                var str = data.toString();
                                arr = str.split("\n");
                                art = find(arr, jsn2);
                                if (art == -1) {
                                    fs.appendFile("data.txt", jsn2 + '\n', function (error) {
                                        if (error) throw error; // если возникла ошибка
                                        console.log("Запись файла завершена. Содержимое файла:");
                                    });
                                }
                            }
                            json.push(jsn2);
                        }
                        var b = 17 * a;
                        //var one = one(strs);
                    }
                }
            }
        }
    });
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
