
/*
FUNÇÕES - PEQUENO TRECHO DE CÓDIGO QUE PODEMOS INVOCAR A SUA EXECUÇÃO A QUALQUER MOMENTO QUE QUISERMOS.

Exemplo:
if (condicional verdadeira) {
    1 + 1;
}
*/

/*
COMO SE DECLARA UMA FUNÇÃO
SINTAXE:
function nome(parâmetros) {

}
*/

/*
function sayMyName(name) { // UMA VEZ DECLARADA, PODEMOS REFERENCIAR/CHAMAR A FUNÇÃO.
    console.log('Your name is: ' + name);
}

sayMyName('Irys') 
*/

/*
FORMAS PARA INVOCAR UMA FUNÇÃO
- 1ª forma:
nomedafunção();
*/

/*
EXEMPLO - CÁLCULO DE POTÊNCIAS
function quadrado(valor) {
    return valor * valor;
}

const quadradoDeDez = quadrado(10);
console.log(quadradoDeDez);

EXEMPLO - Cálculo de potência + soma entre elas
function quadrado(valor) {
    return valor * valor;
}

console.log(quadrado(10) + quadrado(10));

EXEMPLO - incrementação de juros

function incrementarJuros(valor, percentualJuros) {
    const valorDeAcrescimo = (percentualJuros / 100) * valor;
    return valor + valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(100, 15));
console.log(incrementarJuros(100, 20));
*/

/*
COMO ORGANIZAR OS CÓDIGOS
O código principal será inserido dentro de uma função.

function calcularJuros() { // exemplo de função auxiliar

}
function main() { // função principal
    console.log('Programa principal') //código do programa principal.
    calcularJuros(); // usar dentro da funçãoprincipal as outras funções auxiliares conforme formos precisando.
}

main();
*/

/*
EXEMPLO: Organizando o código e deixando tudo mais legível.

- Código do exercício do IMC:

1º) REFATORAÇÃO DO CÓDIGO PARA UTILIZAR FUNÇÕES:
function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

const peso = 78;
const altura = 1.62;

const imc = calcularImc(peso, altura);
console.log(classificarImc(imc));
*/


/*
2º) ISOLAR A CLASSIFICAÇÃO DO IMC:
function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return ''Obeso';
    } else {
        return 'Obesidade grave';
    }
}
*/

// COMO FICARÁ O CÓDIGO
/*Todo trecho de código que é de responsabilidade única podemos isolá-lo (com uma função), para diminnuir a complexidade do código e melhorar a legibilidade do mesmo. */

function calcularImc(peso, altura) {
    return peso / Math.pow(altura, 2);
}

function classificarImc(imc) {
    if (imc < 18.5) {
        return 'Abaixo do peso';
    } else if (imc >= 18.5 && imc < 25) {
        return 'Peso normal';
    } else if (imc >= 25 && imc < 30) {
        return 'Acima do peso';
    } else if (imc >= 30 && imc < 40) {
        return 'Obeso';
    } else {
        return 'Obesidade grave';
    }
}

function main() {
    const peso = 78;
    const altura = 1.62;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
}

main();

/*
No JavaScript, as funções são como um objeto, podemos manipulá-las como se fosse um valor.
EXEMPLO:
main = function() {  //foi reatribuido outro valor a function main.
    console.log(1);
}

main();
*/

/*
FUNÇÃO IMEDIATAMENTE INVOCADA = a função foi criada e é executa imediatamente após, apenas uma única vez.
- ESSE TIPO DE FUNÇÃO É MUITO UTILIZADA NA PARTE DA WEB;
- SERÁ A FUNÇÃO PRINCIPAL.

EXEMPLO: essa função só existe dentro do parênteses e não é possível invocá-la, pois não possui uma variável(nome da função) para referênciá-la.

// MAIN
(function () {        // função não nomeada
    const peso = 78;
    const altura = 1.62;

    const imc = calcularImc(peso, altura);
    console.log(classificarImc(imc));
})();
*/

/*
ESTRUTURA DOS CÓDIGOS
1º) Criação de uma função anônima e será invocada imediatamente;
2º) Funções auxiliares sempre que for necessário (ficam acima da função principal)
*/
