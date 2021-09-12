/* 
Faça um programa que receba um número 
inteiro e verifique se esse número é par ou ímpar
*/

var n1 = parseInt(prompt("Insira um número inteiro: "));

if( n1 % 2 == 0 ) {
	document.write(n1+" é par.");
}else{
	document.write(n1+" é ímpar.");
}