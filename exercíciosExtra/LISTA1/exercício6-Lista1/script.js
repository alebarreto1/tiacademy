/* Faça um programa que receba o salário-
base de um funcionário, calcule e mostre o salário a receber, 
sabendo-se que esse funcionário tem gratificação de 5% sobre 
o salário-base e paga imposto de 7% sobre o salário-base.*/

var sal = parseFloat(prompt("Insira o salário base: "));

var grat = sal*(5/100);

var imp = sal*(7/100);

var novoSal = (sal + grat - imp).toFixed(2);

document.write("Salário a receber: "+novoSal+" ." );