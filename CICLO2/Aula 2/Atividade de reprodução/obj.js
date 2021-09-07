// var let const
/*
var nome= "marcelo"; //variável global - pode acessar em qualquer momento do código
let sobreNome = "weihmayr";


if(true){
	console.log("Var nome= "+nome);
	var nm = nome;
	console.log("Chamando o sobrenome "+ sobreNome);
	let sn = "Da Silva";
	console.log(sobreNome);
}

//let criado dentro de um escopo - só vale para aquele escopo;

console.log("Meu nome é "+nm+" "+sobreNome+" "+sn);
console.log("Var nome= "+nm);
*/

var Pessoa = {
	nome: "Alessandro", 
	rua: "Rua lá",
	ncasa: "13",
	dados: function(){
		document.write(//imprimir
			"Nome...:"+this.nome+"<br>"+// this faz referência ao objeto
			"Rua...:"+this.rua+"<br>"+
			"N. casa...:"+this.ncasa+"<br>")}
}

Pessoa.dados();

/*console.log("Nome "+Pessoa.nome+
	" Endereço "+Pessoa.rua+" N."+Pessoa.ncasa); */