// Criando uma calculadora
function calculadora(){
    const operacao = Number(prompt('Escolha uma operação:\n 1 - Soma (+)\n 2 - Subtração (-)\n 3 - Multiplicação (*)\n 4 - Divisão Real (/)\n 5 - Divisão Inteira (%)\n 6 - Potenciação (**)'));

    // Verificar se a operação é valida com as opções dadas
    if (!operacao || operacao >= 7){
        alert('Erro - operação inválida!');
        calculadora();
    } else {

        // definindo variáveis
        let n1 = Number(prompt('Insira o 1º valor:')); /*Number está convertendo o valor de string para o tipo number*/
        let n2 = Number(prompt('Insira o 2º valor:'));
        let resultado;

        // Verificar se as variáveis são válidas
        if (!n1 || !n2) {
            alert('Erro - parâmetros inválidos!')
            calculadora();
        } else {

            // declarando as funções
            function soma() {
                resultado = n1 + n2;
                alert(`${n1} + ${n2} = ${resultado}`) /*Uso da crase = Template string - usar string junto com expressões e variáveis*/
                novaOperacao()
            }
            function subtracao() {
                resultado = n1 - n2;
                alert(`${n1} - ${n2} = ${resultado}`)
                novaOperacao()
            }
            function multiplicacao() {
                resultado = n1 * n2;
                alert(`${n1} * ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divReal() {
                resultado = n1 / n2;
                alert(`${n1} / ${n2} = ${resultado}`)
                novaOperacao()
            }
            function divInteira() {
                resultado = n1 % n2;
                alert(`O resto da divisão entre ${n1} e ${n2} é igual a ${resultado}`)
                novaOperacao()
            }
            function potenciacao() {
                resultado = n1 ** n2;
                alert(`${n1} elevado a ${n2}ª é igual a ${resultado}`) 
                novaOperacao()
            }

            // Para evitar atualizar a página sempre que desejar utilizar uma nova operação vamos criar uma função para perguntar isso.
            function novaOperacao() {
                let opcao = prompt('Deseja fazer outra operação?\n 1 - SIM\n 2 - NÃO');

                if (opcao == 1) {
                    calculadora();
                } else if (opcao == 2) {
                    alert('Até uma próxima!')
                } else {
                    alert('Digite uma opção válida.')
                    novaOperacao()
                }
            }
        }

        // criando um verificador de operações
       /* if (operacao == 1) {
            soma();
        } else if (operacao == 2) {
            subtracao();
        } else if (operacao == 3) {
            multiplicacao();
        } else if (operacao == 4) {
            divReal();
        } else if (operacao == 5) {
            divInteira();
        } else if (operacao == 6) {
            potenciacao();
        }*/

        // Usando switch
        switch (operacao) {
            case 1:
                soma();
                break;
                case 2:
                    subtracao();
                    break;
                    case 3:
                        multiplicacao();
                        break;
                        case 4:
                            divReal();
                            break;
                            case 5:
                                divInteira();
                                break;
                                case 6:
                                    potenciacao();
                                    break;
        }
    }
}

calculadora();