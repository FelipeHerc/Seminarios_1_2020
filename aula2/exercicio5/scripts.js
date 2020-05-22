$(document).ready(async function () {
    while(true) {
        await sleep(1000);
        console.log("loop");

        const classe = $("#retangulo1").attr("class")

        if (classe == "retanguloVermelho"){
            $("#retangulo1").removeClass("retanguloVermelho");
            $("#retangulo1").addClass("retanguloAzul");
        }
       
        if (classe == "retanguloAzul"){
            $("#retangulo1").removeClass("retanguloAzul");
            $("#retangulo1").addClass("retanguloVermelho");
        }

        $("#retangulo2").toggleClass(["retanguloAmarelo", "retanguloVerde"]);
    }

});

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}