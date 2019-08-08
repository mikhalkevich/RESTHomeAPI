var express = require('express');
var hex = require('../../libs/hex');
var router = express.Router();

router.get('/chanel/:chanel/', function (req, res, next) {
    //var arr = [171, 2, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 172];
    var json = res.locals.port.read();
    res.json({'device':json});
});
router.get('/:id', function (req, res, next) {
    var str = req.params.id;
    var ida = str.split("-");
    var chanel = req.params.chanel;
    if(req.query.name){
        var track = req.query.name;
    }else{
        var track = 'unknown';
    }
     hex_answer = hex(req.params.id);
    res.render('one', {ida: ida, str: str, track: track, chanel: chanel, hex_answer: hex_answer});
});
router.get(':id/settings', function (req, res, next) {
    var str = req.params.id;
    var ida = str.split("-");
    console.log(ida);
    res.locals.port.read();
    res.json({'device': id});
});
module.exports = router;
