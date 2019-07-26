var express = require('express');
var mtrf = require('../../libs/mtrf');
var hex = require('../../libs/hex');
var jsons = require('../../libs/json');
var router = express.Router();
router.get('/:id', function (req, res, next) {
    var arr = mtrf(2, 8, 0, 0, 131, 0, 1, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.json(req.cookies.porttest);
});

router.get('/:id/off', function (req, res, next) {
    var arr = mtrf(2, 0, 0, 0, 131, 0, 0, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    console.log(req.cookies.porttest);
    res.json(req.cookies.porttest);
});
module.exports = router;
