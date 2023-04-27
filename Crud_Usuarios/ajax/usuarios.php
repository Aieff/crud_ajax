<?php
include "../conexao.php";

$dados = $_POST;
$acao = $dados['acao'];

if ($acao == "cadastrarUsuario") {

    $nome = $dados['nome'];
    $sobrenome = $dados['sobrenome'];
    $email = $dados['email'];
    $nascimento = $dados['nascimento'];

        $sql = "INSERT INTO usuarios (nome, sobrenome, email, nascimento) VALUES ('$nome', '$sobrenome', '$email', '$nascimento')";
        $resultado = mysqli_query($conexao, $sql);

        if ($resultado) {
            $response['error'] = false;
            $response['msg'] = "Usuário cadastrado com sucesso!";
        } else {
            $response['error'] = true;
            $response['msg'] = "Não foi possível cadastrar o Usuário!";
            echo mysqli_error($conexao);
        }

        echo json_encode($response);
    }


if ($acao == "listarUsuarios") {

    $sql = "SELECT * FROM usuarios";
    $resultado = mysqli_query($conexao, $sql);
    while ($row = mysqli_fetch_assoc($resultado)) {
        $nrow[] = $row;
    }

    if ($resultado) {
        $response['error'] = false;
        $response['msg'] = "Usuário retornado com sucesso!";
        $response['dados'] = $nrow;
    } else {
        $response['error'] = true;
        $response['msg'] = "Não foi possível retornar o Usuário!";
        echo mysqli_error($conexao);
    }

    echo json_encode($response);
}
