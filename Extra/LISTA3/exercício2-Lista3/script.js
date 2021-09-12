/* Desenvolva um algoritmo que receba três números. 
O algoritmo deve imprimir "Condição satisfeita", na tela, 
caso o primeiro dado inserido seja maior do que os outros
dois (o primeiro não pode ser igual a nenhum). 
Caso contrário, deve ser impressa a mensagem: "Erro". */

var n1 = parseFloat(prompt("Digite o primeiro número: "));
var n2 = parseFloat(prompt("Digite o segundo número: "));
var n3 = parseFloat(prompt("Digite o terceiro número: "));

if((n1>n2) && (n1>n3)){
	document.write("Condição satisfeita.");
}else{
	document.write("Erro.");
}