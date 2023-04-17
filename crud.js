$(document).ready(function () {
    //listarGames();
});

var modal = new bootstrap.Modal(document.getElementById('modalGame'));

function exibirModalCadastrarGame() {

    //alterar título para "Cadastrar Game"
    $("#modalTituloGames").html("Cadastrar Game");
    //Zera o alerta
    $("#modalAlert").html("");
    //zerar os campos
    $("#modalGameName").val("");
    $("#modalGameGenero").val("");
    $("#modalGameAno").val("");
    $("#modalGameAvaliacao").val("");
    //adicionar o botão de cadastrar
    $("#modalGameFooter").html('<button type="button" class="btn btn-primary" id="btnSalvarGame" onclick="cadastrarGame()">Salvar</button>');

    modal.show();

}

function cadastrarGame() {

    // Recebe os dados vindos do formulario
    var dados = {
        acao: "cadastrarGame",
        nome: $("#modalGameName").val(),
        genero: $("#modalGameGenero").val(),
        ano: $("#modalGameAno").val(),
        nota: $("#modalGameAvaliacao").val()
    };

    if (dados.nome != '' && dados.genero != '') {

    $.ajax({
        method: "POST",
        url: "../ajax/games.php",
        dataType: 'json',
        data: dados,
        success: function(data) {
            console.log(data)
            if (data['error']) {
                //alert(data['error'])
                } else {
                    //alert(data['error'])
                modal.hide();
                }
            },
            error: function (data) {
            //Exibe alerta error
                $("#modalAlert").html('<div class="alert alert-danger" role="alert">' +
                    'Ocorreu um problema tente novamente' +
                    '</div>');
            }

        });
    } else {
        //Exibe alerta campos obrigatórios
        $("#modalAlert").html('<div class="alert alert-danger" role="alert">' +
            'Preencha os campos obrigatórios' +
            '</div>');
    }
}