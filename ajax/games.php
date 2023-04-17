<?php
# Inclui a conexão com o banco de dados
include '../conexao.php';

# Recebe os dados que estão vindos através do método POST
$dados = $_POST;

# Armazena a ação que está sendo enviada pelo método POST
$acao = $dados['acao'];

# Verifica se a ação é cadastrar game, se for faz a operação no banco
if ($acao == "cadastrarGame") {

    # Armazena os dados enviados pelo método POST através do form
    $nome = $dados['nome'];
    $genero = $dados['genero'];
    $ano = $dados['ano'];
    $nota = $dados['nota'];

    # Realiza a inserção no banco
    $sql = "INSERT INTO games (nome, genero, ano, nota) VALUES ('$nome', '$genero', '$ano', '$nota')";
    $resultado = mysqli_query($conexao, $sql);

    # Retorna para o front o resultado da consulta
    if ($resultado) {
        $response['error'] = false;
        $response['msg'] = "Cadastrado com sucesso!";
    } else {
        $response['error'] = true;
        $response['msg'] = "Não foi possível cadastrar o Game!";
        echo mysqli_error($conexao);
    }

    # Retorna o JSON pois o AJAX espera como retorno um JSON
    echo json_encode($response);
}


if ($acao == "listarGames") {

    $nome = $dados['nome'];
    $genero = $dados['genero'];
    $ano = $dados['ano'];
    $nota = $dados['nota'];

    $sql = "SELECT * FROM games";
    $resultado = mysqli_query($conexao, $sql);
    
    if ($resultado) {
        $response['error'] = false;
        $response['msg'] = "Cadastrado com sucesso!";
    } else {
        $response['error'] = true;
        $response['msg'] = "Não foi possível cadastrar o Game!";
        echo mysqli_error($conexao);
    }
    
    echo json_encode($response);
}