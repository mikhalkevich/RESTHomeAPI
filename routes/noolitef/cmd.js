var express = require('express');
var mtrf = require('../../libs/mtrf');
var hex = require('../../libs/hex');
var jsons = require('../../libs/json');
var router = express.Router();
router.get('/:id', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 4, 0, 0, 0, 0, 0, req.params.id);
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    console.log(req.cookies.porttest);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var str = hex(req.params.id);
    var state = 'off';
    var firm = 1;
    var brightness = 0;
    if (req.cookies.porttest.data) {
        if (req.cookies.porttest.data[9] == 1) {
            var state = 'on';
            var brightness = 100;
        }
    }
    var json_ans = jsons(str, firm, model, state, brightness);
    res.json(json_ans);
});
router.get('/:id/switch', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 4, 0, 0, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    console.log(req.cookies.porttest);
    var str = hex(req.params.id);
    var state = 'off';
    var firm = 1;
    var brightness = 0;
    if (req.cookies.porttest) {
        if (req.cookies.porttest.data[9] == 1) {
            var state = 'on';
            var brightness = 100;
        }
        var model = req.cookies.porttest.data[7];
    }
    var json_ans = jsons(str, firm, model, state, brightness);

    res.json(json_ans);
});

router.get('/:id/on', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 2, 0, 0, 0, 0, 0, req.params.id);
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    console.log(req.cookies.porttest);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    //answer
    var str = hex(req.params.id);
    var model = '';
    if (req.cookies.porttest) {
        if(req.cookies.porttest.data){
            model = req.cookies.porttest.data[7];
        }
    }
    var json_ans = jsons(str, 1, model, 'on', 255);
    res.json(json_ans);
});

router.get('/:id/off', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 0, 0, 0, 0, 0, 0, req.params.id);
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    console.log(req.cookies.porttest);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    //answer
    var str = hex(req.params.id);
    if (req.cookies.porttest) {
        if(req.cookies.porttest.data){
            var model = req.cookies.porttest.data[7];
        }
    }
    var json_ans = jsons(str, 1, model, 'off', 0);
    res.json(json_ans);
});

router.get('/:id/level/:lev', function (req, res, next) {
    //var arr_t = [171, 2, 9, 0, 0, 129, 17, 103, 0, 255, 255, 0, 0, 226, 156, 43, 172];
    var arr = mtrf(2, 9, 0, 0, 6, 0, parseInt(req.params.lev), 0, 255, 255, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var answer = res.locals.port.read([]);
    res.json({'command': arr, 'mtrf_answer': answer});
});
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
/*
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
*/
module.exports = router;
