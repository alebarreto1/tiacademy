/* click - Ao clicar em algum elemento HTML
mousemove - Ao mover o cursor do mouse acessa (entra) o elemento
mouseover - Ao mover o cursor do mouse dentro do elemento
mouseout - Ao mover o cursor para fora do elemento
dbclick - Ao efetuar o duplo click rápido sobre o elemento
blur - Ao perder o foco do elemento, geralmente associado ao elemento HTML
*/

window.onload = function(){


//alert("alerta")

const btn1 = document.querySelector(".btn-click"); //btn-click é a classe no 
const legP = document.querySelector(".legenda"); 
const cxTexto = document.querySelector("#texto");//qnd clicar vai capturar o value



/*function msg(){
	alert("Olá"); //quero que está msg seja disparada qnd houver click
} */

//posso colocar a função msg como parâmetro do addEventListener
//posso referenciá-la como função anônima usando arrow function


//btn1.addEventListener('click', ()=>{

/*como fazer para "escrever em um elemento classe html dinamicamente?
 Existe uma propriedade para isso: .innerHTML"*/



/* click - Ao clicar em algum elemento HTML*/

btn1.addEventListener('click', ()=>{
	
	//escrever no elemento
	//legP.innerHTML = "Manipulando o DOM";
	legP.innerHTML += cxTexto.value // está capturando o value


} );

legP.addEventListener('click', ()=>{

	leP.innerHTML = '';

})

/*mouseover - Ao mover o cursor do mouse dentro do elemento*/
	/* legP.addEventListener('mouseout', ()=>{
	
	alert("Teste")
}) */

//TROCAR TIPO DO ELEMENTO

const trocaSenha = document.querySelector("#verSenha");
const cxSenha = document.querySelector("#senha");

trocaSenha.addEventListener('click', ()=>{
	// getAttribute() - para PEGAR O TIPO do elemento
	// setAttribute() - para poder ATRIBUIR UM TIPO a um elemento
	if(cxSenha.getAttribute('type') =='password'){ //é vdd que o tipo é password?
		cxSenha.setAttribute('type','text')
	}else {
		cxSenha.setAttribute('type','password')
	}

});


// alterar background da caixinha de texto

const cxTrocaBg = document.querySelector("#cxTbg");
	
	cxTrocaBg.addEventListener('blur', ()=>{

		cxTrocaBg.setAttribute('class', 'corBg');

	});

	//somar valores cx input text

	const valor1 = document.querySelector("#v1");
	const valor2 = document.querySelector("#v2");
	const btnSomar = document.querySelector("#soma");
	const spResultado = document.querySelector("#resultado");

	btnSomar.addEventListener('click', ()=>{ //chamada do evento no btn

		var cx1 = valor1.value;
		var cx2 = valor2.value;
		var r   = Number(cx1) + Number(cx2);
		
		spResultado.innerHTML = r;
	})


		//evento modal
		const btnModal = document.querySelector("#chamarModal");
		const janelaM  = document.querySelector("#janModal");
		const closeM   = document.querySelector("#fechaModal");

		btnModal.addEventListener('click', ()=>{

			janelaM.setAttribute('class', 'modal');
		});


		janelaM.addEventListener('click', ()=>{

			janelaM.classList.remove('modal');

		} )


}