/* Faça um programa que calcule e mostre a
área de um triângulo. Sabe-se que: Área = (base * altura)/2.*/

var base = parseFloat(prompt("Insira o valor da base: "));
var altura = parseFloat(prompt("Insira o valor da altura"));

var area = parseFloat((base*altura)/2).toFixed(2);

document.write("Área do triângulo: "+area);
