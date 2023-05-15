<?php
$nomes = ['Francisco Souza', 'Guilherme Rosa', 'Arthur Golveia'];
$cliente1 = new stdClass();
$cliente1->nome = $nomes[0];
$cliente2 = new stdClass();
$cliente2->nome = $nomes[1];
$cliente3 = new stdClass();
$cliente3->nome = $nomes[2];

// 1) Utilizando a variável $arrayDeClientes de um echo no nome do segundo cliente.
$arrayDeClientes = [$cliente1, $cliente2, $cliente3];
echo $arrayDeClientes[1]->nome .PHP_EOL .PHP_EOL;


// 2) Utilize a estrutura de dados $arrayDeNascimento para adicionar na estrutura
// $arrayDeClientes a data de nascimento de cada cliente.

$arrayDeNascimento = [
    'Francisco Souza' => '10-12-1996',
    'Arthur Golveia' => '14-01-2000',
    'Guilherme Rosa' => '26-05-1985',
    'Marcelo Planalto' => '26-05-1985'
    ];

foreach ($arrayDeClientes as $cliente) {
    $nomeCliente = $cliente->nome;
    $cliente->dataNascimento = $arrayDeNascimento[$nomeCliente];
    echo "Nome: " . $cliente->nome ;
    echo " - Data de Nascimento: " . $cliente->dataNascimento . PHP_EOL;
}


//3) Faça a ordenação e impressão da estrutura $arrayDeClientes resultante do exercício
//2 pela data de nascimento (pode ser ascendente ou descendente).

usort($arrayDeClientes, function ($a, $b) {
    $dataNascimentoA = DateTime::createFromFormat('d-m-Y', $a->dataNascimento);
    $dataNascimentoB = DateTime::createFromFormat('d-m-Y', $b->dataNascimento);
    return $dataNascimentoA <=> $dataNascimentoB;
});

echo "\n";

foreach ($arrayDeClientes as $cliente){
    echo "Nome: " . $cliente->nome ;
    echo " - Data de Nascimento: " . $cliente->dataNascimento . PHP_EOL;}