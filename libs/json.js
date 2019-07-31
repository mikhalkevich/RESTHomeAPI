function jsons(str, firm, model, state, brightness) {
    if (model == 5){
       var device_model = "SUF-1-300";
       var device_type = "реле/диммер";
    }else if(model == 4){
        var device_model = "SRF-1-3000-M (для подрозетника) ";
        var device_type = "реле";
    }else if(model == 3){
        var device_model = "SRF-1-3000 (розетка)";
        var device_type = "реле";
    }else if(model == 2){
        var device_model = "SRF-10-1000";
        var device_type = "реле";
    }else if(model == 1){
        var device_model = "SLF-1-300";
        var device_type = "реле";
    }else if(model == 0){
        var device_model = "MTRF-64";
        var device_type = "радиоконтроллер";
    }else if(model == 6){
        var device_model = "SRF-1-3000-T";
        var device_type = "терморегулятор";
    }else if(model == 7){
        var device_model = "SRF-1-1000-R";
        var device_type = "реле для роллет";
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