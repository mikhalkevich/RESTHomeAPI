var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');


var indexRouter = require('./routes/index');
var cmdRouter = require('./routes/cmd');
var getRouter = require('./routes/get');
var devicesRouter = require('./routes/devices');
var bindRouter = require('./routes/bind');
var infoRouter = require('./routes/info');
var SerialPort = require('serialport');
var port = new SerialPort('/dev/ttyUSB0', {
    autoopen:true,
    baudRate: 9600,
    databits: 8,
    parity: 'none',
    stopBits: 1,
    flowControl: false});
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules/jquery/dist')));
app.use(function (req, res, next) {

    var cookie = req.cookies.porttest;
    if (cookie === undefined) {
        //compo = '173,2,0,0,0,130,0,3,0,1,255,0,0,143,93,32,174';
        compo = '0';
    } else {
        //console.log(cookie);
        compo = cookie.data;
    }
    res.locals = {
        comport: compo,
        port: port
    }
    next();
});
app.use('/', indexRouter);
app.use('/get', getRouter);
app.use('/device', getRouter);
app.use('/devices', devicesRouter);
app.use('/bind', bindRouter);
app.use('/cmd', cmdRouter);
app.use('/info', infoRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error');
});
console.log('ok - 9998');
app.listen(9998);
module.exports = app;
