var express = require('express');
var mtrf = require('../../libs/mtrf');
var hex = require('../../libs/hex');
var jsons = require('../../libs/json');
var read_answer = require('../../libs/answer');
var read_all = require('../../libs/all_answer');
var router = express.Router();
router.get('/sensors', function (req, res, next) {
    console.log('ok sensor');
    var arr = mtrf(1, 2, 0, 1, 0, 0, 0, 0, 0, 0, '0-0-0-0');
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var real_answer = read_all(req, res);
    console.log(real_answer);
    res.json(real_answer);
});
router.get('/:id', function (req, res, next) {
    res.json({id:req.params.id});
});
router.get('/:id/on', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 2, 0, 0, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var real_answer = read_answer(req, res);
    res.render('on', real_answer);
});



router.get('/:id/off', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 0, 0, 0, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var real_answer = read_answer(req, res);
    res.render('off', real_answer);
});

router.get('/:id/switch', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 4, 0, 0, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var real_answer = read_answer(req, res);
    res.render('switch', real_answer);
});


router.get('/:id/dimmer', function (req, res, next) {
    var real_answer = read_answer(req, res);
    res.render('dimmer', real_answer);
});

router.post('/:id/dimmer', function(req, res, next){
    //var arr_t = [171, 2, 9, 0, 0, 129, 17, 103, 0, 255, 255, 0, 0, 226, 156, 43, 172];
    var arr = mtrf(2, 9, 0, 0, 6, 0, parseInt(req.body.level), 0, 255, 255, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.redirect('back');
});



module.exports = router;
