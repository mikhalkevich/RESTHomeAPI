var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    //var arr = [171, 2, 0, 0, 0, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 45, 172];
    var json = res.locals.port.read();
    res.json({'device':json});
});
router.get('/:id', function (req, res, next) {
    var str = req.params.id;
    var ida = str.split("-");
    console.log(ida);
    var answer = res.locals.port.read();
    console.log(answer);
    res.render('one', { answer: answer, ida: ida, str: str});
});
router.get('/:id/settings', function (req, res, next) {
    var str = req.params.id;
    var ida = str.split("-");
    console.log(ida);
    res.locals.port.read();
    res.json({'device': id});
});
module.exports = router;
