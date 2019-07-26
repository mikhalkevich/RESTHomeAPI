$(function(){
    function func() {
$.ajax({
    method: 'get',
    url: '/listener/more',
    success: function(data){
        $('.empty').append(data);
    }
})
    }

    setInterval(func, 1000);
})