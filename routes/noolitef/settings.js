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

//srf
router.get('/:id/base_srf', function(req, res, next){
 json = str_json(req, res);
 res.render('base_srf', json);
});
router.post('/:id/base_srf', function(req, res, next){
 console.log(req.body);
 var command_m, noolite_command_m;
 if(req.body.command == 'on'){
  command_m = 1;
 }else{
  command_m = 0;
 }
 if(req.body.noolite_command == 'on'){
  noolite_command_m = 1;
 }else{
  noolite_command_m = 0;
 }
 var arr = mtrf(2, 9, 0, 0, 129, 16, command_m, 0, noolite_command_m, 0, req.params.id);
 res.locals.port.write(arr, function (err) {
  if (err) {
   return console.log('Error on write: ', err.message);
  }
 });
 res.redirect('/noolitef/settings/'+req.params.id+'/base_srf?name='+req.query.name+'&chanel='+req.query.chanel);
});
module.exports = router;
