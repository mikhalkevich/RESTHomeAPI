var express = require('express');
var mtrf = require('../../libs/mtrf');
var router = express.Router();
var fs = require('fs');
var one = require('../../libs/name');

router.get('/', function (req, res, next) {
    var arr = [171, 2, 0, 0, 0, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 188, 172];
    console.log('bind ');
    res.locals.port.write(arr, function (err) {
        console.log('bind ok');
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var dev = res.locals.port.read([]);
    if(!dev){
        dev = res.locals.port.read([]);
    }
    var str =  dev[4] + ',' + one(dev[7]) + ',' + dev[11] + '-' + dev[12] + '-' + dev[13] + '-' + dev[14] + '\n';
    console.log(str);
    fs.appendFile("data.txt", str, function (error) {
        if (error) throw error; // если возникла ошибка
        console.log("Запись файла завершена. Содержимое файла:");
    });
    res.redirect('/');
});
router.get('/on', function(req, res, next){
    console.log('bind start');
    var arr = mtrf(1, 3, 0, 2, 0, 0, 0, 0, 0, 0, '0-0-0-0');
    res.locals.port.write(arr, function (err) {
        console.log('bind ok');
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.redirect('/')
});
router.get('/:id/unbind', function (req, res, next) {
    var id = req.params.id;
    //var arr=[171,2, 9, 0, 0, 131, 0, 1, 0, 0, 0, 0, 0, 226,156,183,172];
    var arr = mtrf(2, 9, 0, 0, 131, 0, 1, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        console.log('bind ok');
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    //var arr1=[171,2, 9, 0, 0, 9, 0, 1, 0, 0, 0, 256,156,92,172];
    var arr1 = mtrf(2, 8, 0, 0, 9, 0, 1, 0, 0, 0, req.params.id);
    res.locals.port.write(arr1, function (err) {
        console.log('bind ok');
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    console.log('unbind');
    var array = fs.readFileSync('data.txt').toString().split("\n");
    var str = '';
    array.splice(array.indexOf(id), 1);
    console.log(array);
    for (var i = 0, len = array.length; i < len; i++) {
        var end = len-1;
        if(end == i){
            str += array[i];
        }else{
            str += array[i] + '\n';
        }

    }
    fs.writeFile("data.txt", str);
    res.redirect('/');
});


module.exports = router;
