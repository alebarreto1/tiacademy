/*Desafio
1. Ao abrir o navegador deverá apresentar uma janela para que digite o nome;
2. O nome digitado deverá aparecer na segunda janela que irá pedir um número;
3. Será impresso o nome conforme no exemplo do desafio;
4. Será impresso o valor digitado entre parênteses;
5. Irá retornar um valor de comparação resultando em um booleano;
6. Será efetuado a soma;
7. Irá retornar o resto da divisão;
8. Irá retornar o quadrado do valor digitado;
*/

var name = prompt("Por favor, digite o seu nome..:"); // abre caixa para usuário inserir nome
var number = parseInt(prompt(name+ " digite um número para comparar com 'n'")); // caixa para usuário inserir número 
var n = 20; // variável n que contém o número para ser comparado ao inserido pelo usuário
var compare = (number === n); // comparação
var sum = (number + n); // soma
var subtract = (number - n); // subtração
var rest = (number%n); // módulo
var square = ( number ** 2); // número inserido ao quadrado

document.write("1- Seja bem vindo..: " + name + "<br>"); // document.writer imprime na tela 
document.write("2- Você digitou o número..: " +"("+number+")"+ "<br>");
document.write("3- O retorno da comparação booleana é..: " + (compare) + "<br>");
document.write("4- A soma dos valores é de..: " + sum + "<br>");
document.write("5- A subtração dos valores é..: " + subtract + "<br>");
document.write("6- O resto da divisão é de..: " + rest + "<br>");
document.write("7- O quadrado do número digitado é..: " + square + "<br>");