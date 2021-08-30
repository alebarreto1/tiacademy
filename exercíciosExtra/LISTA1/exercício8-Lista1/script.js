/*Faça um programa que receba o valor de um depósito e 
o valor da taxa de juros, calcule e mostre o 
valor do rendimento e o valor total depois do rendimento. */

var dep = parseFloat(prompt("Insira o valor do depósito: "));
console.log("Depósito: R$" + dep.toFixed(2));

var taxa = parseFloat(prompt("Qual é a taxa de juros? "));
console.log("A taxa de juros é de: " + taxa.toFixed(2) + "%");

var rend = (dep*(taxa/100));
console.log("Rendimento: R$" + rend);
document.write("Rendimento: "+rend+".<br>");

var total = dep + rend;
console.log("Valor total: R$" + total);
document.write("Valor total: "+total+".")








