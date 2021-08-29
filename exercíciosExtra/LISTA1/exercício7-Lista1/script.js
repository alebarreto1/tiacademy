/*Faça um programa que receba o salário-base de um funcionário, 
calcule e mostre o seu salário a receber, sabendo-se que esse
funcionário teve gratificação de R$ 600,00 
e paga imposto de 10% sobre o salário base.*/

var sal = parseFloat(prompt("Insira o salário-base: "));

var novoSal= (sal + 600.00 - (sal*(10/100))).toFixed(2);

var novoSal = document.write("Salário a receber: "+novoSal+".")  