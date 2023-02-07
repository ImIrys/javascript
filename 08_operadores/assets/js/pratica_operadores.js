// Atividade prática:
// 1º Criar uma função que receba 2 números como parâmetros;
// 2º Conferir se os números são iguais;
// 3º Conferir se a soma dos números é maior que 10 ou menor que 20;
// 4º Retornar uma string que diz: "Os números num1 e num2 não/são iguais. Sua Soma é soma, que é maior/menor que 10 e maior/menor que 20.


// 1º Criar uma função que receba 2 números como parâmetros;
function comparaNumeros(num1, num2) {
/*validação */
    if(!num1 || !num2) 
    return "Defina 2 números!";

    const primeiraFrase = criaPrimeiraFrase (num1, num2); 
    const segundaFrase = criaSegundaFrase (num1, num2);

    return `${primeiraFrase} ${segundaFrase}`;
}
/*Criação da primeira frase */
function criaPrimeiraFrase(num1, num2) {
    let saoIguais = '';
    if (num1 !== num2) {
        saoIguais = 'não';
    }

    return `Os números ${num1} e ${num2} ${saoIguais} são iguais.`;
}

/*Criação da segunda e terceira frases */
function criaSegundaFrase(num1, num2) {
    const soma = num1 + num2;

    let resultado10 = 'menor';
    let resultado20 = 'menor';
    
    const compara10 = soma > 10;
    const compara20 = soma > 20;

    if (compara10) {
        resultado10 = 'maior';
    }

    if(compara20) {
        resultado20 = 'maior';
    }

    return `Sua soma é ${soma}, que é ${resultado10} que 10 e ${resultado20} que 20.`;
}

console.log(comparaNumeros(0, 0));
