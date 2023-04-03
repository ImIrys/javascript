/* COMO ORGANIZAR O NOSSO CÓDIGO */

/* FUNÇÃO gets E print DENTRO DA PLATAFORMA DA DIO:
- gets: pega uma leitura como se fosse um input de alguém digitando;
- print: é como se fosse o console.log, recebe o texto.
*/

// OBS: TERMO "MOCADO" - MOCK (OBJETO MOCK, OBJETO SIMULADO) - são objetos que simulam o comportamento de objetos reais de forma controlada. São normalmente criados para testar o comportamento de outros objetos.

/*
1º PASSO - DEFINIR 2 FUNÇÕES:
1) function gets
2) function print

EXEMPLO:

function gets(){
    return 10;
}
function print(texto){
    console.log(texto);
}
*/

/* PARA EXPORTAR ALGUMA COISA PRECISAMOS FAZER O SEGUINTE:
EXEMPLO:
module.exports = o que eu quero exportar;
*/

/* EXPORTAÇÃO DE UM OBJETO COM FUNÇÃO gets E print

module.exports = { gets, print }; //OBJETO LITERAL COM 2 ATRIBUTOS (NO CASO SÃO FUNÇÕES E COMO ESTÃO DENTRO DO OBJETO SÃO MÉTODOS)
*/


// PRATICANDO CONCEITOS DE IMPORTAÇÃO E EXPORTAÇÃO
/*
const entradas = [5, 50, 10, 98, 23];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++; // o mesmo que dizer i = i+i;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };
*/

/*
3ª RESOLUÇÃO DO EXERCÍCIO:*/

const entradas = [10, 5, 50, 1, 98, 23, 100, 44, 27, 31];
let i = 0;

function gets(){
    const valor = entradas[i];
    i++; // o mesmo que dizer i = i+i;
    return valor;
}

function print(texto){
    console.log(texto);
}

module.exports = { gets, print };
