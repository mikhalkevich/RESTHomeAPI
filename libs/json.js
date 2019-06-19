function jsons(str, firm, state, brightness) {
    var json = {
        "state": {
            "id": str,
            "deviceType": "dimmer",
            "deviceModel": "suf-1-300",
            "firmwareVersion": firm,
            "state": state,
            "brightness": brightness
        }
    };
    return json;
}


module.exports = jsons;