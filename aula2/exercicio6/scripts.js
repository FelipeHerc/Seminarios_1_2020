$(document).ready(async function () {
    $("#botaoMenos").click(function () {
        var font_size = $("#texto").css("font-size");

        font_size = parseInt(font_size);

        if(font_size <= 8)
            return;

        font_size = font_size - 2;

        $("#texto").css({
            "font-size": font_size
        })
    });

    $("#botaoMais").click(function () {
        var font_size = $("#texto").css("font-size");

        font_size = parseInt(font_size);

        if(font_size >= 70)
            return;

        font_size = font_size + 2;

        $("#texto").css({
            "font-size": font_size
        })
    });

});
