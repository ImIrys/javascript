/*
    1 - CRIE UMA CLASSE PARA REPRESENTAR CARROS.
    - OS CARROS POSSUEM UMA MARCA, UMA COR E UM GASTO MÉDIO DE COMBUSTÍVEL POR KILOMETRO RODADO.
    - CRIE UM MÉTODO QUE DADO A QUANTIDADE DE KILOMETROS E O PREÇO DO COMBUSTÍVEL NOS DÊ O GASTO EM REAIS PARA REALIZAR ESTE PERCURSO.

*/

// ORIENTAÇÃO A OBJETOS

class Carro {
    marca;
    cor;
    consumoMedioPorKm;

    constructor(marca, cor, gastoMedioPorKm) {
        this.marca = marca; 
        this.cor = cor; 
        this.gastoMedioPorKm = gastoMedioPorKm; 
    }

    //ESSE OBJETO TEM A CAPACIDADE DE CALCULAR O GASTO DE UM PERCURSO
    calcularGastoPercurso(distanciaKm, precoCombustivel) { 
        return (distanciaKm * this.gastoMedioPorKm) * precoCombustivel;
    }
}

const march = new Carro('Nissan', 'Vermelho', 1/14.4);
console.log(march.calcularGastoPercurso(164, 5));
const palio = new Carro('Fiat', 'Prata', 1/10);
console.log(palio.calcularGastoPercurso(164, 5));