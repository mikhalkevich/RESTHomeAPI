$(function () {
    function func() {
        $.ajax({
            method: 'get',
            url: '/listener/writer',
            success: function (data) {
                var chanel = data.chanel;
                var status = data.status;
                $('#json_chanel').text(chanel);
                $('#json_status').text(status);
            }
        })
    }
    setInterval(func, 1000);
})