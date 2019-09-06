$(function () {
    function func() {
        $.ajax({
            method: 'get',
            url: '/listener/writer',
            success: function (data) {
                console.log(data);
                var d0 = data.d0;
                var status = data.status;
                $('#json_powerUpState').text(status);
                $('#json_status').text(status);
                $('#json_temporaryOn').text(status);
                $('#json_nooLiteCommands').text(d0);
            }
        })
    }
    setInterval(func, 1000);
})