$(document).ready(function () {
    
    alert("A página foi carregada");

    $("#gatinho2").hide();

    $("#botao_teste").click(function() {
        alert('aoooo');
    });
    
    $("#mostrar").click(function(){
        $("#gatinho").show(1000);
    });

    $("#sumir").click(function(){
        $("#gatinho").hide(1000);
    });

    $("#toggle").click(function(){
        $("#gatinho").toggle(1000);
    });

    $("#adicionar_classe").click(function(){
        $("#texto").addClass("borda");
    });

    $(".remover_classe").click(function(){
        $("#texto").removeClass();
    });

    $("#adicionar_multiplas_classes").click(function(){
        $("#texto").addClass(["borda", "fundo"]);
    });

    $("#tirar_borda").click(function(){
        $("#texto").removeClass("borda");
    });    

    $("#tirar_fundo").click(function(){
        $("#texto").removeClass("fundo");
    }); 

    $("#hover").on("mouseover", function () {
        $("#gatinho2").show(200);
    });

    $("#hover").mouseout(function () {
       $("#gatinho2").hide(200); 
    });
    
});