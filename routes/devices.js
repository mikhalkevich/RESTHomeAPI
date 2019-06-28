var express = require('express');
var mtrf = require('../libs/mtrf');
var router = express.Router();

router.get('/', function (req, res, next) {
    var json = [];
    for (var i = 0; i < 64; i++) {
        //171, 2, 0, 0, (byte)i, 128, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 172
        var arr = mtrf(2, 0, 0, i, 128, 0, 0, 0, 0, 0, '0-0-0-0');
        res.locals.port.write(arr, function (err) {
            if (err) {
                return console.log('Error on write: ', err.message);
            }
        });
        var por = res.locals.port.read([]);
        if (por != null) {
            var str = por[0] + '-' + por[1] + '-' + por[2] + '-' + por[3] + '-' + por[4] + '-' + por[5] + '-' + por[6] + '-' + por[7] + '-' + por[8] + '-' + por[9] + '-' + por[10] + '-' + por[11] + '-' + por[12] + '-' + por[13] + '-' + por[14] + '-' + por[15] + '-' + por[16];
            //console.log(str);
            var jsn1 = por[11] + '-' + por[12] + '-' + por[13] + '-' + por[14];
            //console.log(jsn1);
            json.push(jsn1);
            var b = 0;
            for (var a = 1; a < 64; a++) {
                var b = 17 * a;
                var strs = por[b] + '-' + por[1 + b] + '-' + por[2 + b] + '-' + por[3 + b] + '-' + por[4 + b] + '-' + por[5 + b] + '-' + por[6 + b] + '-' + por[7 + b] + '-' + por[8 + b] + '-' + por[9 + b] + '-' + por[10 + b] + '-' + por[11 + b] + '-' + por[12 + b] + '-' + por[13 + b] + '-' + por[14 + b] + '-' + por[15 + b] + '-' + por[16 + b];
                var jsn2 = por[11 + b] + '-' + por[12 + b] + '-' + por[13 + b] + '-' + por[14 + b];
                if (por[b]) {
                    //console.log(strs);
                    //console.log(jsn2);
                    json.push(jsn2);
                }
                sleep(1000);
            }
        }
    }
    console.log(json);
    res.json(json);
});

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms);
    });
}

module.exports = router;
