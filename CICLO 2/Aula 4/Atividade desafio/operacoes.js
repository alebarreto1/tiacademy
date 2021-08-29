window.onload = function () {
/*Crio uma função anônima que irá autoexecutar-se.
Quero que essa função traga os produtos
Ao trazer esses produtos quero que ela liste-os na id produtos
Logo, preciso manipular a id #produtos*/ 
    (() => {
        let mostrarProdutoCliente = document.querySelector("#content-produtos > ul#produtos");
        
  /*Vou precisar executar um loop for, pois temos uma quantidade de produtos que preciso listar
É necessário passar o produto como parâmetro, então, vou criar um índice para ler tais produtos.*/ 
        for (let idx in produtos) {
            mostrarProdutoCliente.innerHTML += `<li class = "itemProduto" data-preco=${produtos[idx].prodPreco}> ${produtos[idx].prodDesc} </li> `;
        }
        console.log(mostrarProdutoCliente);
    })(produtos);


    const itemProduto = document.querySelectorAll("#produtos > li.itemProduto");
    const cestaCliente = document.querySelector("ul#cestaDoCliente");
    const mostraTotalCompra = document.querySelector("#mostraTotalCompra");
    const armazenaItens = [];
    var totalPedido = 0;



    console.log(itemProduto);

    itemProduto.forEach((item) => {
        item.addEventListener('click', () => {


            if (armazenaItens.indexOf(item.textContent) == -1) {

                li = document.createElement("li");
                li.setAttribute("class", "itemProduto");
                li.setAttribute("data-preco", item.dataset.preco);

                armazenaItens.push(item.textContent);
                cestaCliente.appendChild(li).textContent = item.textContent;
                totalPedido += Number(item.dataset.preco);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

            } else {
                alert(`Este item ${item.textContent} já esta na sua cesta!`);
            }
        });
    });

    //Desafio = remover o item da lista(sua cesta)
    const cestaCliente1 = document.querySelectorAll("#cestaDoCliente");
    const list = document.querySelector("ul#cestaDoCliente");

    cestaCliente1.forEach((item) => {

        item.addEventListener('click', (itemCesta) => {

            var idx = armazenaItens.indexOf(itemCesta.target.textContent);
            if (idx > -1) {

                totalPedido -= Number(itemCesta.target.dataset.preco);

                cestaCliente.removeChild(list.childNodes[idx]);
                armazenaItens.splice(idx, 1);
                mostraTotalCompra.value = totalPedido.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
            }
        });
    });

};
