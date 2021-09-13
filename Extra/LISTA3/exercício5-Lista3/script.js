/*Desenvolva um algoritmo que simule uma calculadora. Você deve dar a opção de o usuário escolher entre: 
1 - Somar; 2 - Subtrair; 3 - Multiplicar; 4 - Dividir. 
O usuário só conseguirá processar dois números inteiros por vez.*/


do{

var calc = Number(prompt(`Digite 1 para somar;\nDigite 2 para subtrair;
	                     \nDigite 3 para multiplicar;\nDigite 4 para dividir;\n`));
} 

while(calc > 4);


switch(calc){
    case 1:
        n1 = prompt("Insira o primeiro número para soma: ");
        n2 = prompt("Insira o segundo número para soma: ");
        soma = (n1 + n2);
        document.write("A soma dos números " + n1 + " e " + n2 + " resulta em: " + soma);
    break;

    case 2:
        n1 = prompt("Insira o primeiro número para subtração: ");
        n2 = +prompt("Insira o segundo número para subtração: ");
        sub = (n1 - n2);
        document.write("A subtração dos números " + n1 + " e " + n2 + " resulta em: " + sub);
    break;

    case 3:
        n1 = +prompt("Insira o primeiro número para multiplicação: ");
        n02 = +prompt("Insira o segundo número para multiplicação: ");
        mult = (n1 * n2);
        document.write("A multiplicação dos números " + n1 + " e " + n2 + " resulta em: " + mult);
    break;

    case 4:
        n1 = +prompt("Insira o primeiro número para divisão: ");
        n2 = +prompt("Insira o segundo número para divisão: ");
        div = (n1 / n2);
        document.write("A divisão dos números " + n1 + " e " + n2 + " resulta em: " + div);
    break;

    default:
        document.write("Opção inválida, tente novamente!");
    break;
}