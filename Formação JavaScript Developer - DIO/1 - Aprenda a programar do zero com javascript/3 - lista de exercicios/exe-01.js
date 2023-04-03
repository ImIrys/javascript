/*
1) Faça um algoritmo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo:

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre.

*/

/*
DICA:
- VERIFICAR O QUE O PROGRAMA TEM DE ENTRADA
- VERIFICAR O QUE O PROGRAMA TEM DE SAÍDA;
- COMO TRANSFORMAR UM NO OUTRO.
*/

const nota1 = 7;
const nota2 = 7;
const nota3 = 8;
const media = (nota1 + nota2 + nota3) / 3;

console.log(media.toFixed(2));

if (media < 5) {
    console.log('REPROVADO');
} else if (media >= 5 && media <= 7) {
    console.log('RECUPERAÇÃO');
} else {
    console.log('PASSOU DE SEMESTRE');
}