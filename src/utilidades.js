import Product1 from '../public/image/product-1.jpg'
import Product2 from '../public/image/product-2.jpg'
import Product3 from '../public/image/product-3.jpg'
import Product4 from '../public/image/product-4.jpg'
import Product5 from '../public/image/product-5.jpg'
import Product6 from '../public/image/product-6.jpg'
import Product7 from '../public/image/product-7.jpg'
import Product8 from '../public/image/product-8.jpg'

export const catalogo = [
        {
          id: "1",
          marca: 'Zara',
          nome: 'Camisa Larga com Bolsos',
          preco: 70,
          imagem: Product1, 
          feminino: false, 
        },
        { 
          id: "2",
          marca: 'Zara',
          nome: 'Casaco Reto com Lã',
          preco: 85,
          imagem: Product2,
          feminino: true, 
        },
        { 
          id: "3", marca: 'Zara',
          nome: 'Jaqueta com Efeito Camurça',
          preco: 60,
          imagem: Product3,
          feminino: false, 
        },
        { 
          id: "4",
          marca: 'Zara',
          nome: 'Sobretudo em Mescla de Lã',
          preco: 160,
          imagem: Product4,
          feminino: false, 
        },
        { 
          id: "5",
          marca: 'Zara',
          nome: 'Camisa Larga Acolchoada de Veludo Cotelê',
          preco: 110,
          imagem: Product5,
          feminino: false, 
        },
        { 
          id: "6",
          marca: 'Zara',
          nome: 'Casaco de Lã com Botões',
          preco: 170,
          imagem: Product6,
          feminino: true, 
        },
        { 
          id: "7",
          marca: 'Zara',
          nome: 'Casaco com Botões',
          preco: 75,
          imagem: Product7,
          feminino: true, 
        },
        { 
          id: "8",
          marca: 'Zara',
          nome: 'Colete Comprido com Cinto',
          preco: 88,
          imagem: Product8,
          feminino: true,
         }]

       export function salvarLocalStorage(chave, informacao) { 
          localStorage.setItem(chave, JSON.stringify(informacao)) 
         }

         export function lerLocalStorage(chave) { 
          return JSON.parse(localStorage.getItem(chave)) 
         } 

         export function apagarDoLocalStorage(chave) {
          localStorage.removeItem(chave)
         }

        export function desenharProdutoCarrinhoSimples(idProduto, idContainerHtml, QuantidadeProduto){ 

          const produto = catalogo.find((p) => p.id === idProduto); 
  
          const containerProdutoCarrinho = document.getElementById(idContainerHtml)
  
          const elementoArticle = document.createElement('article') 
  
          const articleClasses = ['flex','bg-stone-200', 'rounded-lg', 'p-1', 'relative', 'mb-2', 'w-96']
  
          for(const articleClass of articleClasses){
            elementoArticle.classList.add(articleClass)
          }
  
          const cartaoProdutoCarrinho =  `
              <img src="${produto.imagem}" alt="${produto.nome}" class="h-24 rounded-lg">
              <div class="p-2 flex flex-col justify-between">
                <p class="text-slate-900 text-sm">${produto.nome}</p>
                <p class="text-slate-400 text-xs">Tamanho: M</p>
                <p class="text-green-700 text-lg">$${produto.preco}</p>
              </div>
              <div class="flex text-slate-950 items-end absolute bottom-0 right-2 text-lg">
  
                <p id="quantidade-${produto.id}" class="ml-2">${QuantidadeProduto}</p> 
        
              </div>
              `; 
  
              elementoArticle.innerHTML = cartaoProdutoCarrinho 
  
            containerProdutoCarrinho.appendChild(elementoArticle) 
      }