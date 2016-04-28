$(function () {
    $('.login-drop').click(function () {
        $(this).parents('li:first').addClass('open');
    });
    $('.dropdown-menu.login-drop').on('click.bs.dropdown', function (e) {
        return false;
    });
    $('html').niceScroll({
        cursorcolor: "#000",
        cursorborder: "0px solid #fff",
        railpadding: {
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        cursorwidth: "10px",
        cursorborderradius: "0px",
        cursoropacitymin: 0.2,
        cursoropacitymax: 0.8,
        boxzoom: true,
        horizrailenabled: false,
        zindex: 9999
    });
});