$( document ).ready(function() {
    listarUsuarios();
});

var modal = new bootstrap.Modal(document.getElementById('modalCadastrarUsuario'));

function exibirModalCadastrar() {

    $("#modalTitulo").html("Cadastrar Usuário");
    $("#modalFooter").html('<button type="button" class="btn btn-primary" onclick="cadastrarUsuario()">Cadastrar</button>');
    $("#modalNomeUsuario").val("");
    $("#modalSobrenomeUsuario").val("");
    $("#modalEmailUsuario").val("");
    $("#modalDataUsuario").val("");
    modal.show();

}

function cadastrarUsuario() {

    var dados = {
        acao: "cadastrarUsuario",
        nome: $("#modalNomeUsuario").val(),
        sobrenome: $("#modalSobrenomeUsuario").val(),
        email: $("#modalEmailUsuario").val(),
        nascimento: $("#modalDataUsuario").val()
    };

    if (dados.nome != '' && dados.email != '') {

    $.ajax({
        type: "POST",
        url: "ajax/usuarios.php",
        data: dados,
        dataType: "json",
        success: function (data) {
            console.log(data)
            if (data['error']) {
                //alert(data['error'])
            } else {
                //alert(data['error'])
                modal.hide();
                listarUsuarios()
            }
        },
        error: function (data) {
            $("#modalAlert").html('<div class="alert alert-danger d-flex align-items-center" role="alert">' +
                '  <div>' +
                '    Ocorreu um erro !' +
                '  </div>' +
                '</div>');
            }

        });
    } else {
        $("#modalAlert").html('<div class="alert alert-primary d-flex align-items-center" role="alert">' +
            '  <div>' +
            '    Preencha os campos obrigatórios !' +
            '  </div>' +
            '</div>');
    }
}


function listarUsuarios() {

    var dados = {
        acao: "listarUsuarios"
    };

    $.ajax({
        method: "POST",
        url: "../ajax/usuarios.php",
        dataType: 'json',
        data: dados,
        success: function(data) {
            console.log(data)
            if (data['error']) {
                //alert(data['error'])
            } else {
                var html = '';
                var usuarios = data.dados;
                if (usuarios.length > 0) {
                    usuarios.forEach(function (elem) {
                        var html = '';
                        var usuarios = data.dados;
                        if (usuarios.length > 0) {
                            usuarios.forEach(function (elem) {

                                const nascimento = elem.nascimento;
                                const dataCriada = new Date(nascimento);
                                const dataFormatada = dataCriada.toLocaleDateString('pt-BR', {
                                    timeZone: 'UTC',
                                });

                                html += "<tr>" +
                                    "<td>" + elem.id + "</td>" +
                                    "<td>" + elem.nome + "</td>" +
                                    "<td>" + elem.sobrenome + "</td> " +
                                    "<td>" + elem.email + "</td > " +
                                    "<td>" + dataFormatada + "</td> " +
                                    "</tr>";
                            });
                            $("#tabelaUsuariosCadastrados").html(html);
                        }
                    });
                }
            }

        }
    });
}
