/*
Primeira Aula de Js - 16/08/2021

var nome = 'Alessandro'; // string
console.log(typeof(nome));
var nome = 12; // number
console.log(typeof(nome)); // demonstra a var nome no console
//concatenar valores/string
document.write('Idade' + nome + '<br>');
*/


/*
var fruta = 'Laranja';
var oque = 'doce';
var tudoJunto = fruta+' '+oque;
*/


//console.log(tudoJunto);
//Operadores-aritmeticos-Js
var valor1 = '2'; //analisa o que tem dentro e realiza a operação
var valor2 = 2;
var total = valor1 + valor2;

document.write(total); // saindo no html
console.log(valor1-valor2); //console do navegador

var i = 2;
var j = 2;

console.log(i%j); //módulo = calcula o resto da divisão

var x = 3;
var y = 2;

console.log(x*y); //multiplicação

//comparadores
var v = (valor1 == valor2);
console.log(v);

var v = (valor1 === valor2);
console.log(v); //utilizando apenas '==' retornou true, apesar de serem de tipos diferentes

//para saber se valor1 é de fato idêntica à valor2 --> deve-se utilizar '===' 