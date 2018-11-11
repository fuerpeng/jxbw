/**
 * Created by admin on 2018/4/26.
 */
var url = 'http://119.9.107.44:9998/'
$(function () {
    $(".btn-style").click(function () {
        $(".btn-style").removeClass('active');
        $(this).addClass('active');
        $(".btn-group .btn").removeClass("active");
        $(this).parent().prev().addClass("active")
    })

})

