var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    var arr = [171, 2, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 172];
    res.cookie('device', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    console.log(req.cookies.device);
    res.json({'device':req.cookies.device});
});
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    res.json({'device': id});
});
module.exports = router;
