var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
    var answer = res.locals.port.read([]);
    res.render('listener', {answer: answer});
});
router.get('/more', function (req, res, next) {
    var por = res.locals.port.read();
    var arr = por.toJSON().data;
    res.send(arr + '<br />');
    console.log(arr);

})
module.exports = router;
