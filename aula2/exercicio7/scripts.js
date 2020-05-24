$(document).ready(function () {
    $("#set").click(function () {
        var width = $("#width").val();
        var height = $("#height").val();
        console.log('aaaa');

        $("#cage").attr("width", width);
        $("#cage").attr("height", height);
    });

});
