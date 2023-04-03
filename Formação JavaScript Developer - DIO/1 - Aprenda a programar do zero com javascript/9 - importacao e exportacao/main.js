/* TEMOS QUE USAR AS FUNÇÕES DO ARQUIVO funcoes-auxiliares.js, PARA ISSO É PRECISO IMPORTÁ-LAS:

1) USAR UMA FUNÇÃO QUE TEM DENTRO DO node.js CHAMADA require(NOME DO ARQUIVO DESEJADO);

EXEMPLO: IMPORTANDO UM OBJETO COM FUNÇÃO gets E print

const funcoes = require('./funcoes-auxiliares');

console.log(funcoes.gets());
*/

// PRATICANDO

/*
    Uma sala contêm 5 alunos e para casa aluno foi sorteado um número de 1 - 100.
    Faça um programa que receba os 5 números sorteados para os alunos e mostre o maior npumero sorteado.

    Dados de entrada:
    5
    50
    10
    98
    23

    Saída:
    98

    1º PASSO: CRIAR UM ARRAY COM ESSES NÚMEROS DE ENTRADA:
    const entradas = [5, 50, 10, 98, 23];

    2º PASSO: CRIAR UM CONTADOR DE CHAMADAS QUE VAI RECEBER 0. ELE SERÁ LET:
    let i = 0;

    3º PASSO: CRIAR A FUNÇÃO gets(MESMA LÓGICA DO for só que aplicada na função gets)
    function gets(){
    cont valor = entradas[i];
    i++; // o mesmo que dizer i = i+i;
    return valor;
}

    function print(texto){
        console.log(texto);
}

    module.exports = { gets, print };:

    print(gets());
    print(gets());
    print(gets());
    print(gets());
    print(gets());

*/

/*
1ª RESOLUÇÃO DO EXERCÍCIO:

const { gets, print } = require('./funcoes-auxiliares');

const numerosSorteados = [];

for (let i = 0; i < 5; i++) {
    const numSorteado = gets();
    numerosSorteados.push(numSorteado);
}

let maiorValor = 0;

for (let i = 0; i < numerosSorteados.length; i++) {
    const numSorteado = numerosSorteados[i];
    if (numSorteado > maiorValor) {
        maiorValor = numSorteado;
    }
}

print(maiorValor);
*/

/* 
2ª RESOLUÇÃO DO EXERCÍCIO:

const { gets, print } = require('./funcoes-auxiliares');

let maiorValorEncontrado = 0;

for (let i = 0; i < 5; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado
    }
}

print(maiorValorEncontrado);
*/

/*
3ª RESOLUÇÃO DO EXERCÍCIO:*/

const { gets, print } = require('./funcoes-auxiliares');

const qtdAlunos = gets();
let maiorValorEncontrado = 0;

for (let i = 0; i < qtdAlunos; i++) {
    const numeroSorteado = gets();
    if (numeroSorteado > maiorValorEncontrado) {
        maiorValorEncontrado = numeroSorteado
    }
}

print(maiorValorEncontrado);
