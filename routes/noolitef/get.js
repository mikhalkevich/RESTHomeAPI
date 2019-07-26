var express = require('express');
var router = express.Router();

router.get('/:chanel/', function (req, res, next) {
    //var arr = [171, 2, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 172];
    var json = res.locals.port.read();
    res.json({'device':json});
});
router.get('/:chanel/:id', function (req, res, next) {
    var str = req.params.id;
    var ida = str.split("-");
    var chanel = req.params.chanel;
    if(req.query.params){
        var track = req.query.params;
    }else{
        var track = 'unknown';
    }
    res.render('one', {ida: ida, str: str, track: track, chanel: chanel});
});
router.get(':chanel/:id/settings', function (req, res, next) {
    var str = req.params.id;
    var ida = str.split("-");
    console.log(ida);
    res.locals.port.read();
    res.json({'device': id});
});
module.exports = router;
