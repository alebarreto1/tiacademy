/*var nome = "Marcelo";

console.log(nome.length);//COMPRIMENTO DA STRING
console.log(nome[0]);// VAI RETORNAR M
*/

/*match()
O método match PROCURA UMA PALAVRA dentro de uma string.
Existem alguns parâmetros de pesquisa que permitem uma maior
precisão
*/

var palavras = "Macã doce";

//console.log(palavras.match(/D/gi) ); // g de global e i de incase sensitive

/*PARA QUE FAÇA UMA BUSCA GERAL E IGNORE A SENSIBILIDADE DO CARACTERE
USA-SE as flags g(global)i(incase-sensitive)*/


/*search()
O método search() procura pela ocorrência e retornando a POSIÇÃO na 
cadeia da string, a posição é em relação ao primeiro caractere da ocorrência
*/
//console.log(palavras.search(/d/gi) );


//replace() 
//Este método SUBSTITUI UMA STRING
/*var str = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem" +
 "laboriosam illum porro unde nesciunt vero accusantium, ipsum,"

 var mudarStr = str.replace(/ipsum/gi,'Xxxxx');
*/
 //console.log(mudarStr);


 /*localCompare() efetua a COMPARAÇÃO ENTRE DUAS STRINGS, se estas forem
 iguais o retorno será "0" ZERO. Valores -1 e 1 podem ser esperados caso
 elas não sejam iguais. 
*/
/*
var comp1 = "Comparar";
var comp2 = "comparar";

var c1 = comp1.toLowerCase();
var c2 = comp2.toLowerCase();

console.log(`Este é o c1: ${c1} Este é o c2: ${c2}`);

var comparacao = c1.localeCompare(c2);
console.log(comparacao);
*/


/*trim()
Faz a remoção de espaços ANTES E DEPOIS DA STRING especificada
*/

var p = '  fpalavra+ ';

var r= p.trim();
console.log(r);
var s = r.replace(/f/gi, '');
console.log(s);
var sub_a = s.replace('+', ''); //remover e substituir o sinal de +
console.log(`Removido: ${sub_a}`);


//toLocaleString

var valor = 1.357 // 1,35;
var formatarMoeda = valor.toLocaleString('pt-Br', {
	style: 'currency',
	currency: 'BRL'
})

console.log(formatarMoeda);