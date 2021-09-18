/* (Adaptado de ASCENCIO e CAMPOS, 2008) Um funcionário de uma empresa recebe
aumento salarial anualmente. Sabe-se que:

a) esse funcionário foi contratado em 2015, com salário inicial de R$ 1.000,00;
b) em 2016 recebeu aumento de 1,5% sobre seu salário inicial;
c) a partir de 2017 (inclusive), os aumentos salariais sempre corresponderam ao dobro
da porcentagem do ano anterior.
Faça um programa que receba o ano atual determine o salário atual desse funcionário. */

let anoAtual = parseInt(prompt("Qual é o ano atual?"));
console.log(anoAtual);

let sal = 1000;
let porc = 1.5 / 100;
let novoSal = sal + sal * porc;

for (i = 2017; i <= anoAtual; i++) {
    porc = 2 * porc;
    novoSal = (novoSal + (novoSal * porc));
}

document.write("O salário atual é: "+novoSal+".");