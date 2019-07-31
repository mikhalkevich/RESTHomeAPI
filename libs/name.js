function one(str) {
    if (str == 5){
        var device_model = "Реле/диммер SUF-1-300";
    }else if(str == 4){
        var device_model = "Реле SRF-1-3000-M (для подрозетника) ";
    }else if(str == 3){
        var device_model = "Реле SRF-1-3000 (розетка)";
    }else if(str == 2){
        var device_model = "Реле SRF-10-1000";
    }else if(str == 1){
        var device_model = "Реле SLF-1-300";
    }else if(str == 0){
        var device_model = "Радиоконтроллер MTRF-64";
    }else if(str == 6){
        var device_model = "Терморегулятор SRF-1-3000-T";
    }else if(str == 7){
        var device_model = "Реле для роллет SRF-1-1000-R";
    }else{
        var device_model = "Неизвестное устройство";
    }
    return device_model;
}


module.exports = one;