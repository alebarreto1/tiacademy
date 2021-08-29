window.onload = function(){

    // mapear através da const 
    const pai = document.querySelectorAll("#pai");
    pai.forEach((pegarFilhos)=>{

        pegarFilhos.addEventListener('click',(filho)=>{

            alert(filho.target.textContent);

        });
    });
 
    const btn = document.querySelector("#btn");
    const outroPai = document.querySelector('#outroPai');
    var i = 0;
    btn.addEventListener('click',()=>{

        let lista = ["Banana", "Uva", "Pera", "Manga"];

        li = document.createElement("li");//este elemento é criado dinamicamente
        
        outroPai.appendChild(li).textContent=lista[i];
        li.setAttribute("class", "itemL");// classe para o elemento li
        i++;
    });

    const paiDaLista = document.querySelectorAll("#outroPai");
    paiDaLista.forEach(listaDeFilhos=>{
        
        listaDeFilhos.addEventListener("click",(filhos)=>{
            alert(filhos.target.textContent);
        });
    });

}