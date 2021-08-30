/* Faça um programa que receba três notas,
calcule e mostre a média aritmética entre elas. */

var n1 = parseFloat(prompt("Digite a primeira nota..: "));

var n2 = parseFloat(prompt("Digite a segunda nota..: "));

var n3 = parseFloat(prompt("Digite a terceira nota..: "));

var media = parseFloat((n1 + n2 + n3)/3);

console.log(media);
document.write("A média aritimética é de..: "+media+" .");
