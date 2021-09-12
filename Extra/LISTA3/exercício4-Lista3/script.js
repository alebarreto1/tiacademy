/* 
Desenvolva um algoritmo que receba dois números, calcule e mostre a multiplicação 
entre eles, se ambos forem iguais. Caso o primeiro seja maior que o segundo, mostre a 
subtração do primeiro pelo segundo. Caso contrário, mostre a soma entre os dois.
*/

var n1 = parseFloat(prompt("Insira primeiro número : "));
var n2 = parseFloat(prompt("Insira o segundo número: "));



if(n1 == n2){
    var mult = (n1*n2);    
    document.write("Multiplicação: (" + n1 + ") x (" + n2 + ") resulta em: " + mult);
} else if(n1 > n2){  
    var sub = (n1 - n2);
    document.write("Subtração: (" + n1 + ") - (" + n2 + ") resulta em: " + sub);
}  else {
    var soma = (n1+n2); 
    document.write("Soma: (" + n1 + ") + (" + n2 + ") resulta em: " + soma);
}