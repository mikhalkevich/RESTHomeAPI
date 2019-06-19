function hex(str) {
    var ida = str.split("-");
    var x = parseInt(ida[0]);
    var xx = parseInt(ida[1]);
    var xxx = parseInt(ida[2]);
    var xxxx = parseInt(ida[3]);
    var hex = x.toString(16) + xx.toString(16) + xxx.toString(16) + xxxx.toString(16);
    return hex;
}


module.exports = hex;