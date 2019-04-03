var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next){
    var arr = [171, 2, 0, 0, 5, 15, 0, 0, 0, 0, 0, 0, 0, 0, 0, 193, 172];
    console.log('bind ');
    //console.log(res.locals.port);
    //res.cookie('device', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.locals.port.write(arr, function (err) {
        console.log('bind ok');
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var dev = res.locals.port.read([]);
        res.json({'device':dev});
});


module.exports = router;
