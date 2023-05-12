// Exercicio Bônus

async function a() {
  b();
  await c();
  await d();
  alertUser("a");
}
a();

function b() {
  return;
  alertUser("b");
}

function c() {
  return new Promise((resolve) => {
    resolve();
    alertUser("c");
  });
}

function d() {
  return new Promise((resolve) => {
    resolve();
    alertUser("d");
  });
}

function alertUser(message) {
  console.log("A função é: " + message);
}

// Bônus:
//     3) Qual a ordem dos prints no console?
// A saída no console é a seguinte:

// A função é: c
// A função é: d
// A função é: a

//      4) Existe algum erro nesse código? Se sim, comente sobre?
// Sim, há alguns erros no script, são eles:
// A função b está chamando o return antes de alertUser(), fazendo com que a função retorne imediatamente,
// assim o alertUser() nunca será executado

// Nas funções 'c' e 'd' a promise está sendo resolvida antes da função alertUser() ser chamada. O correto
// seria chamar as funções que precisam ser executadas antes de resolver uma promise.
