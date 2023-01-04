// Como se declara um Aray
/* let array = ['string', 1, true, false, ['array1'], ['array2']];
console.log(array); */

// Pode guardar vários tipos de dados
let array = ['string', 1, true, ['array1'], ['array2'], ['array3'], ['array4']];
/* console.log(array [3]); /* Como acessar o índice */

 // forEach - imprime o array e seu índice
/*array.forEach(function(item, index){console.log(item, index)});

// push - Insere um novo dado dentro do array 
/* array.push('novo item');
console.log(array); */

// pop - Remove item no final do array
/*array.pop(); 
console.log(array);*/

// shift - Remove item no início do array 
/* array.shift(); 
console.log(array); */

// unshift - adiciona um item no início do array
/*array.unshift('novo item no início');
console.log(array); */

// indexOf - Retorna o índice de um item dentro de um array
/*console.log(array.indexOf(true)); */

// splice - remove u substitui um item por um índice
/*array.splice(0,3);
console.log(array);*/

// slice - retorna uma parte de um array existente
/*let novoArray = array.slice(0,3);
console.log(novoArray);*/


// Objetos
let object = { string: 'string', number: 1, boolean: true, array: ['array'], objectInterno: { objectInterno: 'objeto interno'}};

/*console.log(object.boolean); /*acessar as propriedades do objeto*/

/*var string = object.string;
console.log(string); */

// Formas de fazer desestruturação
/*var arrayInterno = object.array;
console.log(arrayInterno);*/

var { string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno);
