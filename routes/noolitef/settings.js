var express = require('express');
var router = express.Router();

router.post('/', function (req, res, next) {
    //out: 'rele', state: 'off', command: 'on', control: 'on'
 console.log(req.body);
});

module.exports = router;
