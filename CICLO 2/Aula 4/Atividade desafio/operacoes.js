window.onload = function () {

/*Crio uma função anônima que irá autoexecutar-se.
Quero que essa função traga os produtos
Ao trazer esses produtos quero que ela liste-os na id produtos
Logo, preciso manipular a id #produtos*/

    (()=>{
        let mostrarProdutosCliente = 
        document.querySelector("#content-produtos > ul#produtos");             
//Vou precisar executar um loop for, pois temos uma quantidade de produtos que preciso listar
//É necessário passar o produto como parâmetro, então, vou criar um índice para ler tais produtos. 
        for(let idx in produtos){ 
            //innerHTML - insere dinamicamente - vai receber uma string
            
            mostrarProdutosCliente.innerHTML += 
            /*Quero que ele insira uma lista dentro de uma class=itemProduto
            O itemProduto vai receber um atribute preco*/ 
`<li class=itemProduto data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}</li>`
        }
        //quero clicar no itemProduto e pegar tal fruta com seu respectivo preço
   })(produtos) 

//compra
const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");//percorrer o elemento

const cestaDoCliente = document.querySelector("ul#cestaDoCliente");//armazenar 

const mostraTotalCompra = document.querySelector("#mostraTotalCompra")//total

const armazenaItem = [];
var totalPedido = 0;

//quero clicar no item e lançá-lo na cesta

itemProduto.forEach((item)=>{

    item.addEventListener('click', ()=>{   //quando eu clicar quero que ele crie uma lista

        li = document.createElement("li");  

/*Preciso agora fazer uma referência para saber se na lista já tem ou não o produto 
Para fazer isso, usa-se o 'indexOf' para verificar se um elemento está ou não.
Se retornar -1 é porque não pertence àquela lista.*/
        
        if(armazenaItem.indexOf(item.textContent) == -1){
            //se der -1 vai dar push e armazenar na lista
            armazenaItem.push(item.textContent);

            cestaDoCliente.appendChild(li).textContent = item.textContent;

            totalPedido += Number(item.dataset.preco);

            mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR',
                {style: 'currency', currency: 'BRL'}    
                )

        }else{ 
            //o else vai informar que o produto já existe na lista
            alert(`Este item ${item.textContent} já está na sua cesta`);
        }

    });

});

//Desafio = remover o item da lista(sua cesta)
    const cestaCliente1 = document.querySelectorAll("#cestaDoCliente");
    const list = document.querySelector("ul#cestaDoCliente");

    cestaCliente1.forEach((item) => {

        item.addEventListener('click', (itemCesta) => {

            var idx = armazenaItem.indexOf(itemCesta.target.textContent);
            if (idx > -1) {

                totalPedido -= Number(itemCesta.target.dataset.preco);

                cestaDoCliente.removeChild(list.childNodes[idx]);
                armazenaItem.splice(idx, 1);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }
        });
    });

}//fim
