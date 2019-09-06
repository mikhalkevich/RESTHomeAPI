function read_answer(req, res) {
    var read_answer = res.locals.port.read([]);
    if (read_answer) {
        var status = read_answer[10];
    } else {
        var status = '?';
    }
    if (req.query.name) {
        var track = req.query.name;
    } else {
        var track = 'unknown';
    }
    if (req.query.chanel) {
        var chanel = req.query.chanel;
    } else {
        var chanel = 'unknown';
    }
    var str = req.params.id;
    var real_answer = {str: str, track: track, chanel: chanel, status: status};
    return real_answer;
}

module.exports = read_answer;
