function read_answer(req, res) {
    var read_answer = res.locals.port.read([]);
    //ST MODE CTR RES CH CMD FMT D0 D1 D2 D3 ID0 ID1 ID2 ID3 CRC SP
    if (read_answer) {
        var st = read_answer[0];
        var mode = read_answer[1];
        var ctr = read_answer[2];
        var res = read_answer[3];
        var ch = read_answer[4];
        var cmd = read_answer[5];
        var fmt = read_answer[6];
        var d0 = read_answer[7];
        var d1 = read_answer[8];
        var d2 = read_answer[9];
        var d3 = read_answer[10];
        var id0 = read_answer[11];
        var id1 = read_answer[12];
        var id2 = read_answer[13];
        var id3 = read_answer[14];
        var crc = read_answer[15];
        var sp = read_answer[16];
        var status = {
            st: st,
            mode: mode,
            ctr: ctr,
            res: res,
            ch: ch,
            cmd: cmd,
            fmt: fmt,
            d0: d0,
            d1: d1,
            d2: d2,
            d3: d3,
            id0: id0,
            id1: id1,
            id2: id2,
            id3: id3,
            crc: crc,
            sp: sp
        }
    } else {
        var status = {'?':'?'};
    }
    return status;
}

module.exports = read_answer;
