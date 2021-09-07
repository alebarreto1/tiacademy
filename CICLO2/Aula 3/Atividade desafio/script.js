/*DESAFIO 03
- 3 caixas de texto e 1 botão

- 1º caixa de texto recebe um valor
- 2º caixa de texto recebe outro valor
- 3º caixa de texto o usuário dá um resulado
- Clicar no botão e enviar msg dizendo que está certo ou errado a soma
*/

window.onload = function (){

    var cxText01 = document.querySelector("#text01"); //caixa de texto 01 - recebe valor 
    var cxText02 = document.querySelector("#text02"); //caixa de texto 02 - recebe valor
    var btn = document.querySelector("#btn"); //botão - ao ser clicado envia msg 
    var somaBtn = document.querySelector("#somaFinal"); // para o usuário informar o resultado da soma

    btn.addEventListener("click", ()=>{
        let n1 = +cxText01.value;
        let n2 = +cxText02.value;   
        let resultado = Number(n1) + Number(n2);
        let prova = somaBtn.value;

        if(resultado == prova){
            alert("Certo!");            
            console.log("Resultado = " +resultado);
            
        } else {
            alert("Errou");
            console.log("Soma incorreta");
        }
    });
}