var express = require('express');
var router = express.Router();
router.get('/', function (req, res, next) {
    res.json({});
});
router.get('/:id', function (req, res, next) {
    var id = req.params.id;
    res.json({'device': id});
});
module.exports = router;
