var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    var arr = [171, 2, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 172];
    res.cookie('portread', res.locals.port.read([]), {maxAge: 900000, httpOnly: true});
    res.json({'status':req.cookies.portread});

});
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    res.json({'device': id});
});
module.exports = router;
