var prods = [
    {id: 1, name: "Bife com batata", price: 30.0 }, 
    {id: 2, name: "Coxa de frango crocante", price: 25.0 },
    {id: 3, name: "Carne de panela", price: 22.0 },
    {id: 4, name: "Farofa", price: 10.0 },
    {id: 5, name: "Salada", price: 8.0 },
    {id: 6, name: "Torresmo", price: 12.0 }
];

function calcOrder() {
    var quantities = document.getElementsByName("quantity");
    var total = 0;
    var html = "";

    for (var input of quantities) {
        var id = parseInt(input.id);
        var qtd = parseInt(input.value);

        if (qtd > 0) {
            var preco = prods[id - 1].price;
            var subtotal = preco * qtd;

            html += `
                <div class="checkout_itens">
                    <p>Produto: ${prods[id - 1].name}</p>
                    <p>Quantidade: ${qtd}</p>
                    <p>Preço unitário: R$ ${preco.toFixed(2)}</p>
                    <p>Subtotal: R$ ${subtotal.toFixed(2)}</p>
                </div><br>
            `;

            total += subtotal;
        }
    }

    html += `<h2>Total: R$ ${total.toFixed(2)}</h2>`;
    html += `<p>Bom apetite!</p>`;

    return html;
}
