var express = require('express');
var router = express.Router();
var fs = require('fs');
var one = require('../libs/name');
router.get('/', function (req, res, next) {
    var answer = res.locals.port.read([]);
    res.render('listener', {answer: answer});
});
router.get('/more', function (req, res, next) {
    var por = res.locals.port.read();
    var array = fs.readFileSync('data.txt').toString().split("\n");
    json = [];
    if (por) {
        if (por != undefined) {
            var b = 0;
            for (var a = 1; a < 64; a++) {
                var strs = por[b] + '-' + por[1 + b] + '-' + por[2 + b] + '-' + por[3 + b] + '-' + por[4 + b] + '-' + por[5 + b] + '-' + por[6 + b] + '-' + por[7 + b] + '-' + por[8 + b] + '-' + por[9 + b] + '-' + por[10 + b] + '-' + por[11 + b] + '-' + por[12 + b] + '-' + por[13 + b] + '-' + por[14 + b] + '-' + por[15 + b] + '-' + por[16 + b];
                if (por[b] != undefined) {
                    if (por[16 + b] > 0 && por[15 + b] > 0 && por[14 + b] > 0 && por[13 + b] > 0) {
                        var jsn2 = por[4 + b] + ', ' + one(por[7 + b]) + ', ' + por[11 + b] + '-' + por[12 + b] + '-' + por[13 + b] + '-' + por[14 + b];
                        console.log(jsn2);
                        json.push(jsn2 + '<br />');
                        if(array.indexOf(jsn2) < 0){
                            fs.appendFile("data.txt", jsn2+'\n', function (error) {
                                if (error) throw error; // если возникла ошибка
                                console.log("Запись файла завершена. Содержимое файла:");
                            });
                        }
                    }
                }
                var b = 17 * a;
            }
        }
    }
    //var arr = por.toJSON().data;
    res.send(json);
});
router.get('/writer', function(req, res){
    var por = res.locals.port.read();
    var status;
    json = [];
    if(por){
        if(por[10] == 0){
            status = 'off';
        }else if(por[10] == 255){
            status = 'on';
        }else{
            status = por[10];
        }
    }
    var jsn = {'chanel':por[4], 'status':status};
    console.log(jsn);
    res.send(jsn);
});
module.exports = router;