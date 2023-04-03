/*
- Para saber se um número é PAR ele tem que ser múltiplo de 2.
- Divide-se o número por 2 e verificamos o resto da divisão, se sobrar resto na divisão o número é ÍMPAR, se não sobrar resto na divisão, o número é PAR. 
*/

/*
- Uma expressão que vai retornar um valor booleano.
- Fórmula para saber se é um número PAR.
const numPar = (numero % 2) === 0;
console.log(numPar);
*/

/* 
OPERADORES DE IGUALDADE
= significa atribuição
== significa igualdade mas é ignorado o tipo da variável
=== significa igualdade, mais usado para comparação
*/

/*
EXEMPLO:
if (numPar) {
    console.log('É um número PAR.');
}

- Para fazer uma NEGAÇÃO da operação acima utiliza-se o sinal de exclamação no ínicio da variável. O sinal de exclamação vai converter o booleano para o oposto dele. Se for 0 vai virar 1, se for 1 vai virar 0.
EXEMPLO:
if (!numPar) {
    console.log('É um número ÍMPAR.');
}
*/

/* 
OPERADORES CONDICIONAIS SIMPLES
- Operador SE = if
Sintaxe:
if() {

}

- Operador SENÃO = else
Sintaxe:
if() {
    trecho de código a ser executado;
} else {
    trecho de código a ser executado;
}

- Operador if ternário
Sintaxe:
if() {
    trecho de código a ser executado;
} else if() {
    trecho de código a ser executado;
} else {
    trecho de código a ser executado;
}
*/

/*
const numero = 0;
const numeroDivisivelPor5 = (numero % 5) === 0;

if (numero === 0) { //verificar se essa condição é verdadeira, se for vai executar o trecho abaixo somente.
    console.log('O número', numero, 'é um número inválido');
} else if (numeroDivisivelPor5) {
    console.log('O número', numero, 'é divisível por 5');
} else {
    console.log('O número', numero, 'não é divisível por 5');
}
*/

/*
const numero = 2;

if ((numero % 2) === 0) {
    console.log('O número', numero, 'é PAR');
} else {
    console.log('O número', numero, 'é ÍMPAR');
}
*/

const numero = 5;
const isNumeroPar = (numero % 2) === 0; //como convenção, as variáveis que são do tipo booleanas, coloca-se o prefixo "is" (ou "eh") no início da variável (é um estado: É ou NÃO É).

if (numeroPar) {
    console.log('O número', numero, 'é PAR');
} else {
    console.log('O número', numero, 'é ÍMPAR');
}