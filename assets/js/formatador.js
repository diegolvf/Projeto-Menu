var prods = [
    {id: 1, name: "Produto 1", price: 10.0 },
    {id: 2, name: "Produto 2", price: 20.0 },
];

function format(){
    output = document.getElementById('output');
    output.innerHTML ="";

    var formatter = new intl.NumberFormat('pt-BR',{
        style: 'currency',
        currency: 'BRL',
    });

    output.innerHTML += `Preço: ${formatter.format(prods[0].price)}</br>`
    output.innerHTML += `Preço: ${formatter.format(prods[1].price)}</br>`
}