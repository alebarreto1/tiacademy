/*Desenvolva um algoritmo que receba um número N e calcule o fatorial de N, sabendo
que N! = N * (N-1) * (N-2) * ... * 3 * 2 * 1.*/

let n = parseInt(prompt("Insira o valor de N:"));
console.log(n);

let fatorial = 1;

for (i = n; i >= 1; i--) {
    fatorial = fatorial * i
}
console.log(fatorial);

document.write("O fatorial de N é "+fatorial+".");