
 import { catalogo } from "./utilidades"
import { adicionarAoCarrinho } from "./menuCarrinho"
 
 export function renderizarCatalogo() {

        for( const produtoCatalogo of catalogo){

            const cartaoProduto = `<div class='border-solid  w-48 m-2 flex flex-col p-2 justify-between shadow-xl shadow-slate-400 rounded-lg group ${produtoCatalogo.feminino ? 'feminino' : 'masculino'}' id="card-produto-${produtoCatalogo.id}">
        <img src="../public/img/${produtoCatalogo.imagem}" class="group-hover:scale-110 duration-300 my-3 rounded-lg" alt="Produto 1"> 
        <p class="text-sm">${produtoCatalogo.marca}</p>
        <figcaption class="text-sm">${produtoCatalogo.nome}</figcaption>
        <p class="text-sm">$${produtoCatalogo.preco}</p>
        <button id="adicionar-${produtoCatalogo.id}" class="bg-slate-950 hover:bg-slate-700 text-slate-200"><i class="fa-solid fa-cart-plus"></i></button>
        </div> `
        
        document.getElementById('container-produto').innerHTML += cartaoProduto 

        document.getElementById(`adicionar-${produtoCatalogo.id}`)
        
        } 

        for (const produtoCatalogo of catalogo){
            document.getElementById(`adicionar-${produtoCatalogo.id}`).addEventListener('click',() => adicionarAoCarrinho(produtoCatalogo.id)) 
        }

}
