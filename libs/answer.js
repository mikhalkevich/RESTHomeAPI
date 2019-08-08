function read_answer(req, res) {
    var read_answer = res.locals.port.read([]);
    console.log(read_answer);

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
    console.log(real_answer);
    res.cookie('porttest', real_answer, {maxAge: 900000, httpOnly: true});
    return real_answer;
}

module.exports = read_answer;