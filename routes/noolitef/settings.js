var express = require('express');
var mtrf = require('../../libs/mtrf');
var read_answer = require('../../libs/answer');
var str_json = require('../../libs/str');
var router = express.Router();

router.post('/', function (req, res, next) {
    //out: 'rele', state: 'off', command: 'on', control: 'on'
 console.log(req.body);
});

router.get('/:id/base', function(req, res, next){
 json = str_json(req, res);
 res.render('base', json);
});
router.post('/:id/base', function(req, res, next){

});
router.get('/:id/dimmer_level', function(req, res, next){
 json = str_json(req, res);
 res.render('dimmer_level', json);
});
router.get('/:id/dimmer_level_on', function(req, res, next){
 json = str_json(req, res);
 res.render('dimmer_level_on', json);
});
router.get('/:id/retranslate', function(req, res, next){
 json = str_json(req, res);
 res.render('retranslate', json);
});
module.exports = router;
