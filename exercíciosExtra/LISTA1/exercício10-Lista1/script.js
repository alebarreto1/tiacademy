/* Faça um programa que calcule e mostre a
área de um círculo. Sabe-se que: Área = Pi * R2, aonde Pi = 3,14. */

const Pi = 3.14;
var raio = parseFloat(prompt("Insira o raio: "));

var area = (Pi * (raio**2)).toFixed(2);

document.write("Área do círculo: "+area);
