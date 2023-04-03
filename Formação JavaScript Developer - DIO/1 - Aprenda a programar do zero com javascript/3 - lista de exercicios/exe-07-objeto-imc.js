
/*
CRIE UMA CLASSE PARA REPRESENTAR PESSOAS.
PARA CADA PESSOA TEREMOS:
    - NOME;
    - PESO;
    - ALTURA.
AS PESSOAS DEVEM TER A CAPACIDADE (diz respeito a um método/função) DE DIZER O VALOR DO SEU IMC (IMC = PESO / (ALTURA * ALTURA));
INSTANCIE UMA PESSOA CHAMDA JOSÉ QUE TENHA 70KG DE PESO E 1.75 DE ALTURA. PEÇA AO JOSÉ OARA DIZER O VALOR DO SEU IMC.
*/

class Pessoa {
    nome;
    peso;
    altura;

    //USAR O CONSTRUCTOR QUANDO FOR ALGO QUE QUEREMOS DEIXAR OBRIGATÓRIO USAR.
    constructor(nome, peso, altura) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
    }

    // o método fica dentro da classe definida
    calcularImc() { // não colocamos nenhum parâmetro pq as informações que queremos já está dentro de classe PESSOA, não precisa de informações de fora, então não precisa receber como um parâmetro. Podemos usar o this para acessar esses valores.
        return this.peso / Math.pow(this.altura, 2);
    }

    classificarImc() {
        const imc = this.calcularImc();
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
}

const jose = new Pessoa('José', 70, 1.75);
console.log(jose);
console.log('IMC =', jose.calcularImc());
console.log(jose.classificarImc());

const irys = new Pessoa('irys', 78, 1.62);
console.log(irys);
console.log('IMC =', irys.calcularImc());
console.log(irys.classificarImc());

