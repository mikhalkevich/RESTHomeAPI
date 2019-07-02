var express = require('express');
var mtrf = require('../libs/mtrf');
var hex = require('../libs/hex');
var jsons = require('../libs/json');
var router = express.Router();

router.get('/:id/status', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 128, 0, 0, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var por = res.locals.port.read([]);
    res.cookie('porttest', por, {maxAge: 900000, httpOnly: true});
    console.log(req.cookies.porttest, por);
    var str = hex(req.params.id);
    var state = 'off';
    var firm = 1;
    var brightness = 0;

    if (por[9] == 1) {
        var state = 'on';
        var brightness = 100;
    }
    var model = por[7];

    var json_ans = jsons(str, firm, model, state, brightness);

    res.json(json_ans);
});

router.get('/:id/more', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 128, 1, 0, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var por = res.locals.port.read([]);
    res.cookie('porttest', por, {maxAge: 900000, httpOnly: true});
    console.log(req.cookies.porttest, por);
    var str = hex(req.params.id);
    var state = 'off';
    var firm = 1;
    var brightness = 0;


    if (por[8] == 0) {
        var externalInputState = 'close';
    } else {
        var externalInputState = 'open'
    }
    var model = por[7];
    if (model == 5) {
        var device_model = "suf-1-300";
        var device_type = "dimmer";
    } else if (model == 3) {
        var device_model = "SRF-1-3000";
        var device_type = "rele";
    } else {
        var device_model = "suf";
        var device_type = "rele";
    }
    var json_ans = {
        "info": {
            "id": str,
            "deviceType": device_model,
            "deviceModel": device_type,
            "firmwareVersion": firm,
            "externalInputState": externalInputState,
            "nooLiteReceive": true
        }
    };

    res.json(json_ans);
});

router.get('/:id/memory', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 128, 2, 0, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var por = res.locals.port.read([]);
    res.cookie('porttest', por, {maxAge: 900000, httpOnly: true});
    console.log(req.cookies.porttest, por);
    var str = hex(req.params.id);
    var state = 'off';
    var firm = 1;
    var brightness = 0;

    if (por[9] == 1) {
        var state = 'on';
        var brightness = 100;
    }
    var model = por[7];
    if (model == 5) {
        var device_model = "suf-1-300";
        var device_type = "dimmer";
    } else if (model == 3) {
        var device_model = "SRF-1-3000";
        var device_type = "rele";
    } else {
        var device_model = "suf";
        var device_type = "rele";
    }
    var json_ans = {
        "memory": {
            "id": str,
            "deviceType": device_model,
            "deviceModel": device_type,
            "firmwareVersion": firm,
            "nooLiteFreeCells": 64,
            "nooLiteFeedbackFreeCells": 63
        }
    };

    res.json(json_ans);
});

router.get('/:id/settings', function (req, res, next) {
    var arr = mtrf(2, 9, 0, 0, 128, 16, 0, 0, 0, 0, req.params.id);
    res.locals.port.write(arr, function (err) {
        if (err) {
            return console.log('Error on write: ', err.message);
        }
    });
    var por = res.locals.port.read([]);
    res.cookie('porttest', por, {maxAge: 900000, httpOnly: true});
    console.log(req.cookies.porttest, por);
    var str = hex(req.params.id);
    var state = 'off';
    var firm = 1;

    if (por[5] == 0 && por[0] == 1) {
        var powerUpState = 'on';
    }else if(por[5] == 1 && por[0] == 0){
        var powerUpState = 'remember';
    }
    else{
        var powerUpState = 'off';
    }

    var model = por[7];
    if (model == 5) {
        var device_type = "dimmer";
    } else if (model == 3) {
        var device_type = "rele";
    } else {
        var device_type = "rele";
    }
    var json_ans = {
        "settings": {
            "id": str,
            "powerUpState": powerUpState,
            "loadOutput" : device_type,
            "nooLiteReceiver":true,
            "externalInput":"unused",
            "temporaryOn":true
        }
    };

    res.json(json_ans);
});

module.exports = router;
