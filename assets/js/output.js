function generate_order() {
    const output = document.getElementById("output");

    // pega dados do cliente
    const clienteHTML = getCustomerInfo();

    // pega dados do pedido
    const pedidoHTML = calcOrder();

    // junta tudo no output
    output.innerHTML = clienteHTML + pedidoHTML;
}
