/*DESAFIO 02
- Utilizar o exercício anterior 
 - verificar se a entrada é um inteiro
 - Enviar um alerta informando que uma string foi enviada
 - Enviar um alerta informando que a string será convertida para número
 - Imprimir os mesmos dados do exercício anterior
 - Posteriormente pedir ao usuário para escolher entre 3 frutas [Laranja, Uva, Pera, Manga] 
 	caso não tenha informa ao usuário de nome (?) que a fruta escolhida não está na lista
*/

var name = prompt("Por favor, digite o seu nome..:");
document.write("1- Seja bem vindo..: "+name+"<br>");
var num = (prompt(name+", digite um número para comparar com 'n'."));
console.log(typeof(num));
alert("Uma "+typeof(num)+" foi enviada !");
document.write("2- Você digitou o número..: "+"("+num+")"+"<br>");
alert("A string enviada será convertida para número!");
var num = parseInt(num);
console.log(typeof(num));
var n = 20;
var compare = (num === n);
document.write("3- O retorno da comparação booleana é..: "+(compare)+"<br>");
var sum = (num+n);
document.write("4- A soma dos valores é de..: "+sum+"<br>");
var subtract = (num-n);
document.write("5- A subtração dos valores é..: "+subtract+"<br>");
var rest = (num%n);
document.write("6- O resto da divisão é de..: "+rest+"<br>");
var square = ( num ** 2);
document.write("7- O quadrado do número digitado é..: "+square+"<br>");