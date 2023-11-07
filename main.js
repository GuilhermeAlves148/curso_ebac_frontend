$(document).ready(function () {
    $("ul").on("click", "li", function () {
        $(this).toggleClass("done");
    })
    
    $('form').on('submit', function (e) {
        console.log("submit");
        e.preventDefault();
        const edListaDeTarefas = $('#endereco-tarefa').val();
        $(`<li>${edListaDeTarefas}</li>`).appendTo('ul');
        $('#endereco-tarefa').val('');
    })
})