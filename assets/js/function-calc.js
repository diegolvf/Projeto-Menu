var prods = [
    {id: 1, name: "Bife com batata", price: 30.0 }, 
    {id: 2, name: "Coxa de frango crocante", price: 25.0 },
    {id: 3, name: "Carne de panela", price: 22.0 },
    {id: 4, name: "Farofa", price: 10.0 },
    {id: 5, name: "Salada", price: 8.0 },
    {id: 6, name: "Torresmo", price: 12.0 }
];

function calc(){
    var quantities = document.getElementsByName("quantity");
    var output = document.getElementById("output");
    var total = 0;


    output.innerHTML = "<h2>Resumo do Pedido:</h2>";

    for (var input of quantities) {
        var id = input.id;
        var qtd = parseInt(input.value);

        if(qtd > 0) {
            output.innerHTML += `<div class= checkout_itens><p>Produto: ${prods[id-1].name}</p> </br> <p>Quantidade: ${input.value}</p></br> <p>Preço: ${prods[id-1].price.toFixed(2)}</p></br></div>`;
            total += prods[id-1].price * parseFloat(input.value); //ATENÇÃO: Parse float não é necessário neste caso, apenas é necessário em situações de soma em que javascript pode confundir a operação de soma com concatenação.    
        }
    }

    output.innerHTML += `<h2>Total: ${total.toFixed(2)}</h2>`;
}