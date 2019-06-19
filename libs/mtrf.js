function arr_f(a, b, c, d, com, com1, com2, com3, com4, com5, str) {
    var ida = str.split("-");
    var x = parseInt(ida[0]);
    var xx = parseInt(ida[1]);
    var xxx = parseInt(ida[2]);
    var xxxx = parseInt(ida[3]);
    var sum = 171 + a + b + c + d + com + com1 + com2 + com3 + com4 + com5 + x + xx + xxx + xxxx;
    //var sum_t = x + xx + xxx + xxxx + 171 + 2 + 9 + com;
    var s = 0;
    if (sum > 2048) {
        s = sum - 2048;
    } else if (sum > 1792) {
        s = sum - 1792;
    } else if (sum > 1536) {
        s = sum - 1536;
    } else if (sum > 1280) {
        s = sum - 1280;
    } else if (sum > 1024) {
        s = sum - 1024;
    } else if (sum > 768) {
        s = sum - 768;
    } else if (sum > 512) {
        s = sum - 512;
    } else if (sum > 256) {
        s = sum - 256;
    } else {
        s = sum;
    }

    var arr = [171, a, b, c, d, com, com1, com2, com3, com4, com5, x, xx, xxx, xxxx, s, 172];
    //var arr = [171, 2, 9, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 143, 93, 167, 172];
    //var arr = [171, 2, 9, 0, 0, 4, 0, 0, 0, 0, 0, 0, 0, 143, 93, 166, 172];
    console.log(x, xx, xxx, xxxx, s, 'summa '+sum);
    console.log(arr);
    return arr;
}


module.exports = arr_f;