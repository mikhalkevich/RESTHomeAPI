var express = require('express');
var router = express.Router();
var fs = require('fs');
router.get('/', function (req, res, next) {
    var arr = [];
    fs.readFile('data.txt', function (err, data) {
        if (err) {
            myError(err, res);
        } else {
            var str = data.toString();
            arr = str.split("\n");
            res.render('index', {title: 'RESTHomeApi', arr: arr});
        }
    });

});

module.exports = router;
