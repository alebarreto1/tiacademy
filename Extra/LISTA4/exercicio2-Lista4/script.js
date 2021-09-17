/*Desenvolva um algoritmo que receba dois números inteiros positivos A e B. Exiba na
tela todos os números inteiros compreendidos entre A e B, excluindo os próprios A e
B. Suponha que o usuário respeite o enunciado e insira valores válidos para A e B.*/

let a = parseInt(prompt("Insira o valor de A:"));
console.log(a);
let b = parseInt(prompt("Insira o valor de B (maior que A):"));
console.log(b);

document.write("Sequência numérica: ");

for (let x = a + 1; x < b; x++) {
    
    document.write(+x+", ");
}