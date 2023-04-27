<?php
include "conexao.php";
?>

<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Cadastrar Usuário</title>
    <link href="style.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
</head>
<body>
<div class="container">

    <table class="table">
        <thead>
        <tr>
            <th scope="col">#</th>
            <th scope="col">Nome</th>
            <th scope="col">Sobrenome</th>
            <th scope="col">Email</th>
            <th scope="col">Data de Nascimento</th>
        </tr>
        </thead>
        <tbody id="tabelaUsuariosCadastrados">
        </tbody>
    </table>

    <!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" onclick="exibirModalCadastrar()">Cadastrar</button>

    <!-- Modal -->
    <div class="modal fade" id="modalCadastrarUsuario" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTitulo"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>

                <div class="modal-body">

                    <div id="modalAlert"></div><br>

                    <label for="modalNomeUsuario">Nome</label><span style ='color: red'> *</span>
                    <input type="text" class="form-control" id="modalNomeUsuario"><br>

                    <label for="modalSobrenomeUsuario">Sobrenome</label>
                    <input type="text" class="form-control" id="modalSobrenomeUsuario"><br>

                    <label for="modalEmailUsuario">E-mail</label><span style ='color: red'> *</span>
                    <input type="text" class="form-control" id="modalEmailUsuario"><br>

                    <label for="modalDataUsuario">Data de Nascimento</label>
                    <input type="date" class="form-control" id="modalDataUsuario">
                </div>
                <div class="modal-footer" id="modalFooter"></div>
            </div>
        </div>
    </div>







</div>
</body>
<script src="ajax.js"></script>
</html>