function hex(str) {
    var ida = str.split("-");
    var x = parseInt(ida[0]);
    var xx = parseInt(ida[1]);
    var xxx = parseInt(ida[2]);
    var xxxx = parseInt(ida[3]);
    var a = x.toString(16);
    var aa = xx.toString(16);
    var aaa = xxx.toString(16);
    var aaaa = xxxx.toString(16);
    var b = ('0' + a).slice(-2);
    var bb = ('0' + aa).slice(-2);
    var bbb = ('0' + aaa).slice(-2);
    var bbbb = ('0' + aaaa).slice(-2);
    var hex = b + bb + bbb + bbbb;
    return hex;
}


module.exports = hex;