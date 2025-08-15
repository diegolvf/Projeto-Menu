//1º Primeiro passo: criar o array com a lista de produtos:
//No array contém o id(identificador único no html), nome e preço de cada produto.
const produtos = [ 
    {id: 1, name: "Bife com batata", price: 30.0 }, 
    {id: 2, name: "Coxa de frango crocante", price: 25.0 },
    {id: 3, name: "Carne de panela", price: 22.0 },
    {id: 4, name: "Farofa", price: 10.0 },
    {id: 5, name: "Salada", price: 8.0 },
    {id: 6, name: "Torresmo", price: 12.0 }
];

//O nome do produto no array não é necessário para que o preço seja exibido. 
//Porém pode ser utilizado para exibir o nome dos pratos dinâmicamente. 

//2º Segundo passo:
//Este trecho do código document.addEventListener("DOMContentLoaded", () => {
//aguarda o carregamento completo do HTML,para garantir que todos os elementos da página
//estejam disponíveis para o script manipular.
//Ou seja: só executa o que está dentro da função depois que o DOM está pronto.

document.addEventListener("DOMContentLoaded", () => {  
    const formatter = new Intl.NumberFormat('pt-BR', { // Cria o formatador para converter números
        style: 'currency',                             // Em valores no formato da moeda brasileira
        currency: 'BRL',                               // (Real, R$)
    });

//3º passo:
    document.querySelectorAll('.preco').forEach(span => { //Seleciona todos os elementos com a classe preco e executa a função com forEach
        const id = Number(span.dataset.id);               //ForEach = para cada um.
        const produto = produtos.find(p => p.id === id);  //Busca o produto correspondente no array.
        if (produto) {
            span.innerText = formatter.format(produto.price);
        }
    });
});

//const id = Number(span.dataset.id);
//Lê o atributo data-id do elemento (ex: data-id="2") e converte para número.
//span.dataset.id acessa o valor 2 como string.
//Number(...) converte essa string para número.

//Resumo desse script:
//Aguarda o carregamento da página
//Pega todos os elementos .preco
//Lê o data-id de cada um
//Procura o produto no array prods
//Insere o preço formatado (R$) no local correto do HTML

