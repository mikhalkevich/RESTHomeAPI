var express = require('express');
var router = express.Router();
/*
router.get('/:id', function(req, res, next){
    var id = req.params.id;
    id1 = parseInt(id.substring(0,2), 16);
    id2 = parseInt(id.substring(2,4), 16);
    id3 = parseInt(id.substring(4,6), 16);
    id4 = parseInt(id.substring(6,8), 16);
    idss = id1+id2+id3+id4;

    console.log(id1,id2,id3,id4, idss);
    res.locals.port.write([171,2,9,0,0,128,0,0,0,0,0,id1,id2,id3,id4,36,172], function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
        console.log();
    });
    res.end();
});
*/
router.get('/:id', function (req, res, next) {
    var arr = arr_f(req.params.id, 4);
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.end();
});
router.get('/:id/switch', function (req, res, next) {
    var arr = arr_f(req.params.id, 4);
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.json({'command': arr, 'device': req.cookies.porttest});
});

router.get('/:id/on', function (req, res, next) {
    var arr = arr_f(req.params.id, 2);
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.json({'command': arr, 'status': req.cookies.porttest});
});

router.get('/:id/off', function (req, res, next) {
    var arr = arr_f(req.params.id, 0);
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.json({'command': arr, 'status': req.cookies.porttest});
});

router.get('/:id/level/:lev', function (req, res, next) {
    var arr = arr_f(req.params.id, 1);
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.json({'command': arr, 'status': req.cookies.porttest});
});

function arr_f(str, com) {
    var ida = str.split("-");
    var x = parseInt(ida[0]);
    var xx = parseInt(ida[1]);
    var xxx = parseInt(ida[2]);
    var xxxx = parseInt(ida[3]);
    var sum = x + xx + xxx + xxxx + 171 + 2 + 9 + com;
    var s = 0;
    if (sum > 768) {
        var s = sum - 768;
    } else if (sum > 512) {
        var s = sum - 512;
    } else if (sum > 256) {
        var s = sum - 256;
    } else {
        var s = sum;
    }
    console.log(x, xx, xxx, xxxx, s);
    var arr = [171, 2, 9, 0, 0, com, 0, 0, 0, 0, 0, x, xx, xxx, xxxx, s, 172];
    //var arr = [171, 2, 9, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 143, 93, 167, 172];
    //var arr = [171, 2, 9, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 143, 93, 166, 172];
    return arr;
}

module.exports = router;
