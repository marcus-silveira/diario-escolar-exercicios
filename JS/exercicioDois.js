// Formate a variável “numero” para o seguinte formato: “(XX)_X_XXXX-XXXX”;

let numero1 = "5(1)9-876-543-21";
let numero2 = "5198312-4465";
let numero3 = "519 91228597";

/**
 * Função que formata um número de telefone no seguinte formato: (XX)_X_XXXX-XXXX
 * @param {string} telefone - String contendo o número de telefone.
 * @returns {string} Retorna uma String com o número formatado.
 */
function formatarNumero(telefone) {
    // Usando regex para remover todos os caracteres que não são números da variável
    let apenasNumeros = telefone.replace(/\D/g, '')
    // Cria uma varável com o DDD
    let ddd = apenasNumeros.slice(0, 2)
    // Cria uma varável com o nono dígito
    let nonoDigito = apenasNumeros[2]
    // Cria uma varável com os 4 primeiros números do telefone
    let primeiraMetade = apenasNumeros.slice(3, 7)
    // Cria uma varável com os 4 últimos números do telefone
    let segundaMetade = apenasNumeros.slice(7)

    // retorna o número completamente formatado
    return `(${ddd}) ${nonoDigito} ${primeiraMetade}-${segundaMetade}`
}

console.log(formatarNumero(numero1))
console.log(formatarNumero(numero2))
console.log(formatarNumero(numero3))
