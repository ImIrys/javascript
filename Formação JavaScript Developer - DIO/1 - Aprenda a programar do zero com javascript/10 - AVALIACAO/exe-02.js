/*
- FAÇA UM PROGRAMA QUE RECEBA N (QUANTIDADE DE NÚMEROS) 
- E SEUS RESPECTIVOS VALORES.
- IMPRIMA O MAIOR NÚMERO PAR E O NÚMERO ÍMPAR.

EXEMPLO:
    ENTRADA:
        5
        3
        4
        1
        10
        8

    SAÍDA:
        MAIOR NÚMERO PAR: 10
        MENOR NÚMERO ÍMPAR: 1
*/

const { gets, print } = require('./funcoes-auxiliares-exe02');

const n = gets();
let maiorNumeroPar = null; //Quando não temos o valor ele é nulo.
let menorNumeroImpar = null;

for (let i = 0; i < n; i++) {
    const numero = gets(); //gets não recebe parâmetro.

    if (numero % 2 === 0) {
        if(maiorNumeroPar === null || numero > maiorNumeroPar){ // || significa ou.
            maiorNumeroPar = numero;
        }
    } else {
        if (menorNumeroImpar === null || numero < menorNumeroImpar){
            menorNumeroImpar = numero;
        }
    }
}

print('Maior número par: ' + maiorNumeroPar);
print('Menor número ímpar: ' + menorNumeroImpar);






