// CLASSE = Uma definição de como o objeto deve ser.
    // - Sempre começam por letra maiúscula.
    // - Sempre no SINGULAR.
// DEFINIR COMO SÃO pessoas PARA QUE POSSAM SER INSTANCIADAS.
class Pessoa {
    nome;
    idade;
    anoDeNascimento;

    constructor(nome, idade) { //Pode receber parâmetros.
        //ISSO OBRIGA QUE SEMPRE QUE UMA Pessoa FOR INSTANCIADA, ELE PEÇA O nome E A idade.
        this.nome = nome; //vai receber o nome que está sendo dado como parâmetro.
        this.idade = idade; //vai receber a idade que está sendo recebida como parâmetro.
        this.anoDeNascimento = 2023 - idade;

        /*É o que acontece quando uma Pessoa é instanciada.
        */
        /*
        Sempre que uma Pessoa é instanciada, ela passa pelo constructor.
        this.nome = 'teste';
        this.idade = '30';
        */
    }   

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}

/*
const irys = new Pessoa('Irys',31);
const ellora = new Pessoa('Ellora', 3);

console.log(irys);
*/

// INSTÂNCIA = é a ocorrência de uma classe/objeto.
// O QUE É UMA INSTANCIA DESSA pessoa? É a Irys.

/*
const irys = {
    nome: 'Irys Lopes',
    idade: 30,

    descrever: function() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}`);
    }
}
*/

/*
COMO INSTANCIAR UMA pessoa NOVA
const irys = new Pessoa(); //vai chamar o método constructor lá de cima.
*/

/*
irys.nome = 'Irys Lopes';
irys.idade = 30;
*/

/*
const ellora = new Pessoa();
*/

/*
ellora.nome = 'Ellora Duarte';
ellora.idade = 3;
*/

/*
Ver o que está dentro dessa instância

console.log(irys);
console.log(ellora);
*/

// CRIAR UMA FUNÇÃO QUE COMPARA PESSOAS
function compararPessoas(p1, p2) {
    if (p1.idade > p2.idade) {
        console.log(`${p1.nome} é mais velho(a) que ${p2.nome}`);
    } else if (p2.idade > p1.idade) {
        console.log(`${p2.nome} é mais velho(a) que ${p1.nome}`);
    } else {
        console.log(`${p1.nome} e ${p2.nome} têm a mesma idade.`);
    }
}

const irys = new Pessoa('Irys', 30);
const ellora = new Pessoa('Ellora', 3);

compararPessoas(irys, ellora);