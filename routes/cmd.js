var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:id/toogle', function (req, res, next) {
    var id = req.params.id;
    var arr = [171, 2, 1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 178, 172];
    res.cookie('porttest', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    res.json({'device': id, 'status':req.cookies.porttest});
});

router.get('/:id/on', function(req, res, next){

});

router.get('/:id/off', function(req, res, next){

});

module.exports = router;
