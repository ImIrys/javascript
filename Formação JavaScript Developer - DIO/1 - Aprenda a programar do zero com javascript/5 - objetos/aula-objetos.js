
/*
OBJETOS LITERAIS

{} representação de um objeto literal.

- Objeto = coleção dinâmica (podemos adicionar ou remover) de valores/dados ou funções, funciona através de chave e valor.
- Exemplo: Sintaxe de um objeto literal
const pessoa = {
    nome: 'Irys Lopes', 
    idade: 30
};

*/

/*
console.log(pessoa.nome);
console.log(pessoa.idade);
console.log(pessoa);
*/

/*
- Uma vez definido o objeto literal, podemos incrementá-lo dinamicamente.
- Exemplo: 
pessoa.altura = 1.62

console.log(pessoa);
*/

/*
- Podemos deletar os dados tbm:
- Exemplo: 
delete pessoa.altura;

console.log(pessoa);
*/

/*
- É possível utilizar funções (FORA dos objetos) para um objeto.
- Método: função DENTRO de um objeto.
Exemplo: 
const pessoa = {
    nome: 'Irys Lopes', 
    idade: 30,

    //como está dentro de um objeto, pode-se utilizar os valores do mesmo.
    // quando se está numa função, existe uma palavra reservada chamada THIS (diz respeito ao contexto em que a função está sendo executada, ele assume o objeto em si)
    descrever: function() { 
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade} anos.`);
    }
};

pessoa.descrever();
*/

/*
Acessar os valores através de uma SINTAXE mais dinâmica:
const atributo = 'idade'; //string que bate com o nome da chave idade la em cima
*/

/* 
console.log(pessoa['nome']);
pessoa['nome'] = 'teste'; // AQUI É DINÂMICO / é a mesma coisa que dizer o que está abaixo. Aqui não é necessário saber o nome do atributo, pode ser um parâmetro.
 pessoa.nome = 'teste'; //AQUI ESTÁ FAZENDO ACESSO DIRETO. Aqui é necessário saber o nome do atributo.
 */

 