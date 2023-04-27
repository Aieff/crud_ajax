$(document).ready(function () {
    listarGame();
});

var modal = new bootstrap.Modal(document.getElementById('modalGame'));
var modalDeletar = new bootstrap.Modal(document.getElementById('modalDeletar'));

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
    $("#gameIdModal").hide();

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
                listarGame();
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

function listarGame() {

    var dados = {
        acao: "listarGame"
    };

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
                        var html = '';
                        var games = data.dados;
                        if (games.length > 0) {
                            games.forEach(function (elem) {
                                var html = '';
                                var games = data.dados;
                                if (games.length > 0) {
                                    games.forEach(function (elem) {
                                        html += "<tr>" +
                                            "<td>" + elem.id + "</td>" +
                                            "<td>" + elem.nome + "</td>" +
                                            "<td>" + elem.genero + "</td> " +
                                            "<td>" + elem.ano + "</td > " +
                                            "<td>" + elem.nota + "</td> " +
                                            "<td>" + "<button type='button' class='btn btn-success' onclick='exibirModalEditarGame(" + elem.id + ")'>Editar</button> <button type='button' class='btn btn-danger' onclick='exibirModalDeletarGame(" + elem.id + ")'>Deletar</button>" +"</td> " +
                                            "</tr>";
                                    });
                                    $("#listarDadosGames").html(html);
                                }
                            });
                        }
                    }

                }
            });
        }


function exibirModalEditarGame(id) {


    $("#modalTituloGames").html("Editar Game");
    $("#modalGameName").val("");
    $("#modalGameGenero").val("");
    $("#modalGameAno").val("");
    $("#modalGameAvaliacao").val("");
    $("#modalGameFooter").html('<button type="button" class="btn btn-primary" id="btnEditarGame" onclick="editarGame()">Editar</button>');
    $("#gameIdModal").show();


    var dados = {
        acao: 'buscaIdGameEditar',
        id: id
    };

    $.ajax({
        method: "POST",
        url: "../ajax/games.php",
        dataType: 'json',
        data: dados,
        success: function (data) {
            console.log(data)
            if (data['error']) {
                //console.log(data);
            } else {

                $("#modalGameId").val(data.id);
                $("#modalGameName").val(data.nome);
                $("#modalGameGenero").val(data.genero);
                $("#modalGameAno").val(data.ano);
                $("#modalGameAvaliacao").val(data.nota);

                modal.show();
            }

        },
        error: function (data) {
            alert("error");
        }
    });
}


function editarGame() {

    // Recebe os dados vindos do formulario
    var dados = {
        acao: "editarGame",
        id: $("#modalGameId").val(),
        nome: $("#modalGameName").val(),
        genero: $("#modalGameGenero").val(),
        ano: $("#modalGameAno").val(),
        nota: $("#modalGameAvaliacao").val()
    };

    if (dados.nome != '' || dados.genero != '' ||
        dados.ano != '' || dados.nota != '') {

        $.ajax({
            method: "POST",
            url: "../ajax/games.php",
            dataType: 'json',
            data: dados,
            success: function (data) {
                console.log(data)
                if (data['error']) {
                    //alert(data['error'])
                } else {
                    //alert(data['error'])
                    modal.hide();
                    listarGame();
                }
            },
            error: function (data) {
                //Exibe alerta error
                $("#modalAlert").html('<div class="alert alert-danger" role="alert">' +
                    'Ocorreu um problema tente novamente' +
                    '</div>');
            }

        });
    } else
        {
            //Exibe alerta campos obrigatórios
            $("#modalAlert").html('<div class="alert alert-danger" role="alert">' +
                'Preencha ao menos um campo' +
                '</div>');
        }
    }



    function exibirModalDeletarGame(id) {

        $("#modalTituloDeletar").html("Deletar Game");
        $("#alertaMensagem").html("Realmente deseja deletar o Game ?");
        $("#modalGameFooterDeletar").html('<button type="button" class="btn btn-danger" id="btnDeletarGame" onclick="deletarGame()">Deletar</button>');
    

        var dados = {
            acao: "buscaDadosDeletar",
            id: id
        }

        $.ajax({
            method: "POST",
            url: "../ajax/games.php",
            dataType: 'json',
            data: dados,
            success: function (data) {
                console.log(data)
                if (data['error']) {
                    //alert(data['error'])
                } else {
                    //alert(data['error'])
                    
                $("#modalGameIdDeletar").val(data.id);
                $("#modalGameNameDeletar").val(data.nome);
                $("#modalGameGeneroDeletar").val(data.genero);
                $("#modalGameAnoDeletar").val(data.ano);
                $("#modalGameAvaliacaoDeletar").val(data.nota);

                    modalDeletar.show();
                    listarGame();
                }
            },
            error: function (data) {
                //Exibe alerta error
                $("#modalAlert").html('<div class="alert alert-danger" role="alert">' +
                    'Ocorreu um problema tente novamente' +
                    '</div>');
            }

        });
    
    }  



function deletarGame() {

    // Recebe os dados vindos do formulario
    var dados = {
        acao: "deletarGame",
        id: $("#modalGameIdDeletar").val(),
        nome: $("#modalGameNameDeletar").val(),
        genero: $("#modalGameGenerDeletar").val(),
        ano: $("#modalGameAnoDeletar").val(),
        nota: $("#modalGameAvaliacaoDeletar").val()
    };

        $.ajax({
            method: "POST",
            url: "../ajax/games.php",
            dataType: 'json',
            data: dados,
            success: function (data) {
                console.log(data)
                if (data['error']) {
                    //alert(data['error'])
                } else {
                    //alert(data['error'])
                    modalDeletar.hide();
                    listarGame();
                }
            },
            error: function (data) {
                //Exibe alerta error
                $("#modalAlert").html('<div class="alert alert-danger" role="alert">' +
                    'Ocorreu um problema tente novamente' +
                    '</div>');
            }

        });
    }
    
