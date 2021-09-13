/*Desenvolva um algoritmo que peça para que o usuário informe a base e a altura de um
retângulo, e um terceiro número inteiro "op". Caso o usuário escolha "op" igual a 0,
calcule e mostre o perímetro do retângulo. Caso o usuário insira um valor 1 para "op",
calcule e mostre a área do retângulo. Se o usuário inserir um valor diferente de 0 e 1
para "op", mostrar a mensagem "Opção inválida.".*/

let base= Number(prompt("Digite a base do retângulo: "));

let altura = Number(prompt("Digite a altura do retângulo: "));
			  
let op = Number(prompt("Digite 0 para calcular o perímetro e 1 para calcular a área"));

if(op===0){
	document.write("O perímetro mede: "+((2*base)+(2*altura))+".");

}else if(op===1){
 	document.write("A área mede: "+(base*altura)+".")

}else{
  	document.write("Opção inválida.")
}

