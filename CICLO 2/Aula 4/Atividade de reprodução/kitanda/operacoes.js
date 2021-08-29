window.onload=function(){    

/*Crio uma função anônima que irá autoexecutar-se. Quero que essa função traga os produtos.
Ao trazer esses produtos quero que ela liste os mesmos na id produtos.
Logo, preciso manipular a id #produtos*/
   
   (()=>{
    let mostrarProdutosCliente = document.querySelector("#content-produtos > ul#produtos");
      
/*Vou precisar executar um loop 'for', pois há uma quantidade de produtos que preciso listar.
É necessário passar o produto como parâmetro, em seguida, vou criar um índice para ler tais produtos*/ 
    for(let idx in produtos){
        mostrarProdutosCliente.innerHTML += `<li class="itemProduto" data-preco=${produtos[idx].prodPreco}>${produtos[idx].prodDesc}`        
    }
   })(produtos) // (produtos) no final = auto executável - chama var = produtos do código produtos.js


// percorre o elemento produtos e faz uma li.itemProduto item atributo
const itemProduto = document.querySelectorAll("ul#produtos > li.itemProduto");
// criado dinamicamente no inner.HTML acima -  /\

//armazenar itens da compra / inserir no carrinho
const cestaDoCliente = document.querySelector("ul#cestaDoCliente");
//mostraTotalCompra = recebe total da compra e mostra pro cliente
const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
//criação de array para escolher apenas 1 produto
const armazenaItem=[]; // verifica se ja esta no array

var totalPedido =0;

itemProduto.forEach((item)=>{
    item.addEventListener("click",()=>{

        li = document.createElement("li");//  createElement = criou a lista!
        //referencia para saber se tem um produto ja lançado = método indexOf()
        if(armazenaItem.indexOf(item.textContent) == -1){
            //se não encontrar no armazem, então ele é "-1" - /\
            // entao vamos pedir para armazenar na lista e verifica se ja esta no array- \/
            armazenaItem.push(item.textContent); // push inserir um elemento no final do Array!
            // mostra pro cliente que foi inserido na lista - \/
            //itemProduto.textContent(item.textContent); nao deixa ir para cesta
            // criar e add
            cestaDoCliente.appendChild(li).textContent = item.textContent = item.textContent;

            totalPedido += Number(item.dataset.preco); // dataset preço do iten

            //mostra valor do total Pedido na moeda corrente e o valor no input
            mostraTotalCompra.value = totalPedido.toLocaleString("pt-BR",
            {style:"currency", currency: "BRL"})
        }else{
            alert(`Este item ${item.textContent} já está na sua cesta!`);
        }
    });
});


}// fim
