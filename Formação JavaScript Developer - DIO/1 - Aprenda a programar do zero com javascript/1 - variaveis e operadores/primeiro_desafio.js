/*

Faça um programa para calcular o valor de uma viagem.

você terá 3 variáveis. Sendo elas:
 1 - Preço do combustível;
 2 - Gasto médio de combustível do carro por KM;
 3 - Distância em KM da viagem.

*/

// na vida real o preço do combustível muda, mas durante a execução desse trecho de código o valor não vai mudar então usaremos uma constante.
const precoCombustivel = 4.98;
const kmPorLitros = 8.5;
let distanciaKm = 160;

const litrosConsumidos = distanciaKm / kmPorLitros;
const valorGasto = precoCombustivel * litrosConsumidos;

console.log('Litros consumidos é igual a: ', litrosConsumidos.toFixed(2));

console.log('O valor gasto de combustível para realizar a sua viagem é de: R$', valorGasto.toFixed(2)); //O método to.Fixed vai converter o valor para texto para arredondar o valor dentro da variável.
 




