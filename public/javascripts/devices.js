$(function () {
 $('#finder').click(function(){
    var chanel = $('#chanel').val();
    $.ajax({
        method:'get',
        data:'chanel='+chanel,
        url:'/devices/find',
    })
 });
})