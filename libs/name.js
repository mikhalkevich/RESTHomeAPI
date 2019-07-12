function one(str) {
    if (str == 5){
        var device_model = "Dimmer SUF-1-300";
    }else if(str == 3){
        var device_model = "Rele SRF-1-3000";
    }else{
        var device_model = "Rele SUF";
    }
    return device_model;
}


module.exports = one;