$(document).ready(function () {
    $("#confirma").hide();

    $("#botao").click(function () {
        var nome = $("#nome").val();
        var idade = $("#idade").val();
        var altura = $("#altura").val();
        var poder_de_luta = $("#poder_de_luta").val();

        $("#field_nome").removeClass("erro");
        $("#field_idade").removeClass("erro");
        $("#field_altura").removeClass("erro");
        $("#field_poder_de_luta").removeClass("erro");

        
        if(!nome)
            $("#field_nome").addClass("erro");

        if(!idade)
            $("#field_idade").addClass("erro");

        if(!altura)
            $("#field_altura").addClass("erro");

        if(!poder_de_luta)
            $("#field_poder_de_luta").addClass("erro");

        if(nome && idade && altura && poder_de_luta)
            $("#confirma").show();
        
    })

});