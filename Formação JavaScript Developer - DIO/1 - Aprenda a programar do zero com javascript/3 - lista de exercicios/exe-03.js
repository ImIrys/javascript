
/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
1 - Débito à vista, recebe 10% de desconto;
2 - Dinheiro à vista ou PIX, recebe 15% de desconto;
3 - Em 2x, preço normal de etiqueta sem juros;
4 - Acima de 2x, preço normal de etiqueta mais juros de 10%.
*/

const precoEtiquetaProduto = 100;
const formaDePagamento = 4; // Estratégias de Resolução de Algoritmos - Converter algo humano para algo mais minimalistas e o contrário tbm acontece.

if (formaDePagamento === 1) {
    console.log('R$', precoEtiquetaProduto - ((10 * precoEtiquetaProduto) / 100));
} else if (formaDePagamento === 2) {
    console.log('R$', precoEtiquetaProduto - ((15 * precoEtiquetaProduto) / 100));
} else if (formaDePagamento === 3) {
    console.log('R$', precoEtiquetaProduto);   
} else {
    console.log('R$', precoEtiquetaProduto + ((10 * precoEtiquetaProduto) / 100));
}