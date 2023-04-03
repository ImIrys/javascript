
// 2 - CRIE UM PROGRAMA QUE SEJA CAPAZ DE PERCORRER UMA LISTA DE NÚMEROS E IMPRIMA CADA NÚMERO PAR ENCONTRADO.

// 1º PASSO: CRIAR UMA LISTA DE NÚMEROS
const numeros = [7,12,24,50];

// 2º PASSO: CRIAR A ESTRUTURA DE REPETIÇÃO
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 2 === 0) { //SE O RESTO DA DIVISÃO POR 2 FOR IGUAL A 0, É UM NÚMERO PAR.
        console.log(numero);
    }
} 
