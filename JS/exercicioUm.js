// Percorra o objeto clientes e mostre o nome da cada cliente da seguinte maneira:
// “ultimoSobrenome, primeiroNome”;

// Atribuí 'const' ao objeto cliente, o qual é recomendado desde a versão ES6, no lugar de 'var'
const clientes = [
  { id: 1, nome: "Luis Santos Silveira", idade: 18 },
  { id: 2, nome: "Ricardo Lopes Alves", idade: 30 },
  { id: 3, nome: "Gustavo Silva Junior", idade: 26 },
];


// 1° método  - usando o for... of
// Itera sobre o objeto clientes
for (let cliente of clientes) {

  // Cria uma variável com o nome completo de cada cliente
  let nomeCompleto = cliente.nome
  nomeCompleto = nomeCompleto.split(" ")

  // Pega o item de indice 0, sendo sempre o primero nome
  const primeiroNome = nomeCompleto[0]
  // Pega sempre o último elemente de um array, neste caso, o último sobrenome
  const ultimoSobrenome = nomeCompleto[nomeCompleto.length -1]

  // Exibe o resultado solicitado
  console.log(`${ultimoSobrenome}, ${primeiroNome}`)
}


// 2° método -  usando o forEach
clientes.forEach(function(cliente) {
  // Cria uma variável com o nome completo de cada cliente
  let nome = cliente.nome.split(' ');
  // usa o método pop para pegar o último item
  let ultimoSobrenome = nome.pop();
  // Usa o método shift para pegar o primeiro item
  let primeiroNome = nome.shift();

  // Exibe o resultado
  console.log(ultimoSobrenome + ', ' + primeiroNome);
});


