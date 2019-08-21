function str(req, res) {
    var str = req.params.id;
    var track, chanel, json;
    if (req.query.name) {
        track = req.query.name;
    } else {
        track = 'unknown';
    }
    if (req.query.chanel) {
        chanel = req.query.chanel;
    } else {
        chanel = 'unknown';
    }
    json = {str: str, track: track, chanel: chanel};
    return json;
}

module.exports = str;