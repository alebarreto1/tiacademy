//Funções

function soma() {
	var x=1;
	var y=2;
	console.log(x+2)
}

//soma();


function somaPar(x, y) { // os parâmetros são x e y
	var r = x+y;
	console.log(r);
}

function mult(n, o) {
	var resultado = (n * o); //são variáveis locais - não consigo chamr fora da função
	console.log(resultado);
}

function pot(n, o) {
	var resultado = Math.pow(n, o);
	console.log(resultado);
}

mult(3,4);
pot(7,2);

//somaPar(4, 9);
/*
(function respostaF() {
	var nome="Marcelo";
	alert(nome);
	return nome;
}) (); // executa a função sem a necessidade de fazer chamada
*/

/*var f = function() {
	alert("Função sem nome")
} */

//f();
//var d =respostaF();


/*	Arrow function: 
	()=>{
	//código
	}  
*/

//var ar = () => { alert("ArFunc")}
//ar();	

/*
( () => { alert("ArFunc") } ) (); //a função está se executando sem eu precisar chamá-la
*/