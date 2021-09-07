/* Faça um programa que receba o salário de um funcionário, 
calcule e mostre o novo salário, sabendo-se que este sofreu um
aumento de 25%.*/

var sal = parseFloat(prompt("Insira o salário: "));

var novo_sal = sal + (sal*(25/100));

document.write("Novo salário: "+novo_sal.toFixed(2)+" .")