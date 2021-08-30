/* Faça um programa que receba três notas e seus respectivos pesos,
 calcule e mostre a média ponderada dessas notas.*/

 var n1 = parseFloat(prompt("Insira a primeira nota: "));
 var p1 = parseInt(prompt("Insira o peso da primeira nota: ")); 
 //considerei que os pesos seriam números inteiros
 var n2 = parseFloat(prompt("Insira a segunda nota: "));
 var p2 = parseInt(prompt("Insira o peso da segunda nota: "));

 var n3 = parseFloat(prompt("Insira a terceira nota: "));
 var p3 = parseInt(prompt("Insira o peso da terceira nota: "));

 var mediap = parseFloat( ( ( n1*p1 + n2*p2 + n3*p3 )/ (p1 + p2 + p3) ) );

 resultado = mediap.toFixed(2);
 document.write("Média ponderada: "+resultado+" .");