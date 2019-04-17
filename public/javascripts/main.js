$(function () {
    $('#on_more').click(function () {
        var _Seconds = $('#time').val(),
            int;
        int = setInterval(function () { // запускаем интервал
            if (_Seconds > 0) {
                _Seconds--; // вычитаем 1
                $('#timer').text(_Seconds); // выводим получившееся значение в блок
            } else {
                clearInterval(int); // очищаем интервал, чтобы он не продолжал работу при _Seconds = 0
                document.location.href = "/go/on";
            }
        }, 1000);
    });

    $('.dim').click(function () {
        var id = $(this).attr('data-id');
        var val = $("#level_range").val();
        var url = "/cmd/" + id + "/level/" + val;
        console.log(url);
        $.ajax({
            type: 'get',
            url: url,
            data: 'dev=ok',
            success: function (data) {
                $("#level_answer").html(val);
                console.log(data);
            },
            error: function (msg) {
                console.log(msg)
            }
        });
    });

    $('.level').change(function(){
        var val = $(this).val();
        $('#level_range').val(val);
        $('#level_number').val(val);
        $('#level_answer').html(val);
    })

});
