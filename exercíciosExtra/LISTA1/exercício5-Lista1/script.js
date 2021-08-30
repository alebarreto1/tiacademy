/* Faça um programa que receba o salário de um funcionário 
e o percentual de aumento, calcule e mostre o valor do aumento e o
novo salário. */

var sal = parseFloat(prompt("Insira o salário: "));
var perc = prompt("Insira o percentual de aumento:  ");

var aumento = (sal*(perc/100));
document.write("Valor do aumento: " +aumento.toFixed(2)+ " .<br>");

var novoSal = sal + (sal*(perc/100));
document.write("Novo salário: " +novoSal.toFixed(2)+ " .")