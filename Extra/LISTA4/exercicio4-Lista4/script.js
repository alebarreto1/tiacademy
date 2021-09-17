/*Desenvolva um algoritmo que receba um número N 
e imprima a tabuada de N, na tela.*/

let n = parseInt(prompt("Digite um número N:"));

console.log(n);

let i = 1;

while (i <= 10) {
    res = parseInt(n * i);
    document.write(n + " X " + i + " = " + res + ". <br>");

    i = i + 1;
}