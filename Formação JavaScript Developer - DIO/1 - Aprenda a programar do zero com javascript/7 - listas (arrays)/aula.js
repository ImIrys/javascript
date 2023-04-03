/*
ARRAY = LISTAS DE CONTEÚDO
    - são representadas por colchetes "[]"
    - podem ser listas de strings: 
        Exemplo: */
    //     const alunos = ['Henrique', 'Eduardo', 'Leonardo'];

    // /*- é possível armazenar em apenas "uma variável" um conjunto de dados dinâmicos (podemos adicionar ou remover dados da lista). */

    // // ADICIONAR DINAMICAMENTE ITENS À LISTA:
    // alunos.push('Irys'); 

    // // ADICIONA DIRETAMENTE A POSIÇÃO DO ITEM NA LISTA
    // alunos[4] = 'Vinícius';

    // // IMPRIMIR ITENS DA LISTA:
    // console.log(alunos);
    // console.log(alunos[0]);  //pegar a posição zero da lista.
    // console.log(alunos[5]); //se uma posição não existe ela será UNDEFINED.

    // //SUBSTITUIR ITENS DA LISTA:
    // alunos[3] = 'Bruno'; //substituiu o iten da 3ª posição (Irys sumiu).

    //PODEMOS TER TIPOS DIFERENTES DENTRO DE UMA LISTA:
    // alunos.push('teste');
    // alunos.push(10);

    // console.log(alunos);

    // A LISTA PODE INICIAR VAZIA:
    // const alunos = [];

    //REMOVER UM ITEM DA POSIÇÃO: RETIRA O ÚLTIMO ITEM DA LISTA E O IMPRIME DIRETO.
    // const alunos = ['1', '2', '3'];

    // console.log(alunos);

    // console.log(alunos.pop());
    // console.log(alunos);

    // REMOVER O PRIMEIRO ITEM DA LISTA E O IMPRIME DIRETO:
    // const alunos = ['1', '2', '3'];

    // console.log(alunos);

    // console.log(alunos.shift());

    // console.log(alunos);

    // SABER O TAMANHO DE UMA LISTA:
    /* const notas = [];

    notas.push(5);
    notas.push(7);
    notas.push(8);
    notas.push(2);
    notas.push(5);

    console.log(notas.length); // mostra a quantidade de itens da lista
    */
   
    /*
    CALCULAR A MÉDIA
    const soma = notas[0] + notas[1] + notas[2] + notas[3] + notas[4];

    console.log(soma / notas.length);
    */
       
    /*
    ESTRUTURAS DE REPETIÇÃO: Percorrer dinamicamente as listas

    FOR: funciona para percorrer uma QUANTIDADE ESPECÍFICA de vezes.
    EXEMPLO: PERCORRER DE 0 A 10 VEZES */
    /* 1ª parte: delcaração do index(variável de controle) | 2ª parte: estrutura condicional que vai dizer se entra ou não dentro do código | 3ª parte: o que vai acontecer depois de executar o nosso código (normalmente fazemos a condição que vai alterar a variável de controle para passar para a próxma etapa).
    OBS: i++ é a mesma coisa que dizer let i = 1; i = i + 1; 
    for (let i = 0; i < 10; i++) {
        console.log(i);
    }

    EXEMPLO 2: 
    const nome = 'Irys da Silva Batista Lopes';
    
    for (let i = 0; i < nome.length; i++) {
            console.log(nome[i]);    
    }
    */

    /*
    EXEMPLO 3:
    const nome = 'Irys da Silva Batista Lopes';
    
    for (let i = 0; i < nome.length; i++) {
            const letra = nome[i];
            console.log(letra);
        }
    */
    
/*
    EXEMPLO 4: */
    const notas = [];

    notas.push(5);
    notas.push(10);
    notas.push(10);

    let soma = 0; 

    for (let i = 0; i < notas.length; i++) {
        const nota = notas[i];
        soma = soma + nota;
    }

    const media = soma / notas.length;
    console.log(media.toFixed(2));



/* APRENDENDO A DEPURAR: DESCRIÇÃO PASSO A PASSO DO PROGRAMA */