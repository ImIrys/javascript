/*
FAÇA UM PROGRAMA QUE RECEBA A MÉDIA DE UM ALUNO.
- CASO A MÉDIA SEJA < 5 IMPRIMA "REPROVADO";
- CASO A MÉDIA SEJA >= 5 E < 7 IMPRIMA "RECUPERAÇÃO";
- CASO A MÉDIA SEJA >= 7 IMPRIMA "APROVADO".

EXEMPLO:
ENTRADA: 5.5
SAÍDA: RECUPERAÇÃO
*/

const { gets, print } = require('./funcoes-auxiliares-exe01');

const media = gets();

if (media >= 0 && media < 5) {
    print('REPROVADO');    
} else if (media >= 5 && media < 7) {
    print('RECUPERAÇÃO');
} else if (media >= 7) {
    print('APROVADO')
} else {
    print('ERRO, DIGITE UM NÚMERO VÁLIDO.');
}
