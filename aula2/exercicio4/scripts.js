$(document).ready(function () {
    
    $("#button_topo").click(function () {
        const todo = $("#tarefa_descricao").val();

        if(!todo)
            return; //clausula guarda

        $("#lista").prepend(`<li>${todo}</li>`);

        $("#tarefa_descricao").val("");
    });

    $("#button_fim").click(function () {
        const todo = $("#tarefa_descricao").val();

        if(!todo)
            return; //clausula guarda

        $("#lista").append(`<li>${todo}</li>`);

        $("#tarefa_descricao").val("");
    });

});