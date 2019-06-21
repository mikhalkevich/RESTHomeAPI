function jsons(str, firm, model, state, brightness) {
    if (model == 5){
       var device_model = "suf-1-300";
       var device_type = "dimmer";
    }else if(model == 3){
        var device_model = "SRF-1-3000";
        var device_type = "rele";
    }else{
        var device_model = "suf";
        var device_type = "rele";
    }
    var json = {
        "state": {
            "id": str,
            "deviceType": device_type,
            "deviceModel": device_model,
            "firmwareVersion": firm,
            "state": state,
            "brightness": brightness
        }
    };
    return json;
}


module.exports = jsons;