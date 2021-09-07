window.onload = function(){

	//alert("Olá mundo")

	

	const btnBuscaCep = document.querySelector("#btnBuscaCep");
	const cxCep = document.querySelector(".cxCep");

	const dadosCep = async function(cepUrl){ /* dadosCep vai receber uma função assíncrona
	 para ela ter como esperar os dados. Essa função tem um parâmetro (cepUrl) que está sendo enviado
	  na url. A url recebe a string que vai para o fetch.
	  Tenho que fazer a chamada do json, pois quero que ele me retorne
	  Ao final tenho dadosCep */
		
		var url = `https://viacep.com.br/ws/${cepUrl}/json/`;
		var consultaCep = await fetch(url);
		var dadosCep    = await consultaCep.json();
				

		//console.log(dadosCep);

		for( var campos in dadosCep ){ 
			console.log(campos);//trará todos os atributos da localidade do cep

			if(document.querySelector("#"+campos)){
			document.querySelector("#"+campos).value = dadosCep[campos]
			}	
		}	
	}


	btnBuscaCep.addEventListener('click',()=>{

		let cep = cxCep.value;
		dadosCep(cep)

	
				

	})


}