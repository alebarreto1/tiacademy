/* EXÉRCÍCIO 1- Faça um programa que receba dois números e mostre o maior deles. 
Caso eles sejam iguais, deve-se mostrar a mensagem: 
"Os números são iguais". */

var n1 = prompt("Insira o primeiro número: ");
var n2 = prompt("Insira o segundo número: ");

if(n1 > n2){
    document.write("O maior número é: " + n1);
} else if(n1 < n2){
    document.write("O maior número é: " + n2);
} else {
    document.write("Os números são iguais.");
}