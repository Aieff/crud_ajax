<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Games</title>
    <link rel="stylesheet" href="style.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ENjdO4Dr2bkBIFxQpeoTz1HIcje39Wm4jDKdf19U8gI4ddQ3GYNS7NTKfAdVQSZe" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/jquery-3.6.4.min.js" integrity="sha256-oP6HI9z1XaZNBrJURtCoUT5SUnxFr8s3BzRl+cbzUq8=" crossorigin="anonymous"></script>
</head>
<body>

<div class="container">

<table class="table table-dark">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Nome</th>
      <th scope="col">Gênero</th>
      <th scope="col">Lançamento</th>
      <th scope="col">Nota</th>
      <th scope="col">Ação</th>
    </tr>
  </thead>
  <tbody id="listarDadosGames">
  </tbody>
</table>

<!-- Button trigger modal -->
    <button type="button" class="btn btn-primary" onclick="exibirModalCadastrarGame()">Cadastrar</button>

    <!-- Modal -->
    <div class="modal fade" id="modalGame" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTituloGames"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div id="modalAlert"></div>
                    <div class="form-group">

                        <div id="gameIdModal">
                        <label for="modalGameId">Id</label>
                        <input type="text" class="form-control" id="modalGameId" disabled><br>
                        </div>

                        <label for="modalGameName">Nome do Game</label><span style="color: red; font-size: 10px"> * Obrigatório</span>
                        <input type="text" class="form-control" id="modalGameName"><br>

                        <label for="modalGameGenero">Gênero</label><span style="color: red; font-size: 10px"> * Obrigatório</span>
                        <input type="text" class="form-control" id="modalGameGenero"><br>

                        <label for="modalGameAno">Ano de lançamento</label>
                        <input type="text" class="form-control" id="modalGameAno"><br>

                        <label for="modalGameAvaliacao">Nota</label>
                        <input type="text" class="form-control" id="modalGameAvaliacao">
                    </div>
                </div>
                <div class="modal-footer" id="modalGameFooter"></div>
            </div>
        </div>
    </div>





    <div class="modal fade" id="modalDeletar" tabindex="-1" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="modalTituloDeletar"></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="form-group">
                    <div id="alertaMensagem"></div><br>

                    <div id="gameIdModal">
                        <label for="modalGameId">Id</label>
                        <input type="text" class="form-control" id="modalGameIdDeletar" disabled><br>
                        </div>

                        <label for="modalGameName">Nome do Game</label>
                        <input type="text" class="form-control" id="modalGameNameDeletar" disabled><br>

                        <label for="modalGameGenero">Gênero</label>
                        <input type="text" class="form-control" id="modalGameGeneroDeletar" disabled><br>

                        <label for="modalGameAno">Ano de lançamento</label>
                        <input type="text" class="form-control" id="modalGameAnoDeletar" disabled><br>

                        <label for="modalGameAvaliacao">Nota</label>
                        <input type="text" class="form-control" id="modalGameAvaliacaoDeletar" disabled>

                    </div>
                </div>
                <div class="modal-footer" id="modalGameFooterDeletar"></div>
            </div>
        </div>
    </div>







</div>
    
</body>

 <script src="crud.js"></script>
</html>