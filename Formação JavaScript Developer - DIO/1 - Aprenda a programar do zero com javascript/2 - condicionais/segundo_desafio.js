
/*
Faça um programa para calcular o valor de uma viagem.

você terá 5 variáveis. 
Sendo elas:
 1 - Preço do etanol;
 2 - Preço da gasolina;
 3 - O tipo de combustível que está no seu carro;
 4 - Gasto médio de combustível do carro por KM;
 5 - Distância em KM da viagem.

 Imprima no console o valor(R$) que será gasto para realizar esta viagem.
 */

const precoEtanol = 5.79;
const precoGasolina = 6.66;
const kMPorLitros = 10;
const distanciaKm = 100;
const tipoCombustivel = 'Gasolina'; //colocar o tipo que foi usado.
const litrosConsumidos = distanciaKm / kMPorLitros;

if (tipoCombustivel === 'Etanol') {
    const valorGasto = litrosConsumidos * precoEtanol;
    console.log(valorGasto.toFixed(2));
} else {
    const valorGasto = litrosConsumidos * precoGasolina;
    console.log(valorGasto.toFixed(2));
}


 