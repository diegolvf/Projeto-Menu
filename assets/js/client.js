function getCustomerInfo() {
    // pega os valores dos inputs
    const nome = document.getElementById("name").value.trim();
    const telefone = document.getElementById("phone").value.trim();
    const email = document.getElementById("email").value.trim();

    // retorna o texto formatado
    return `
        <h3>Olá senhor(a), ${nome || "Não informado"}.</h3>
        <p>Telefone: ${telefone || "Não informado"}</p>
        <p>Email: ${email || "Não informado"}</p>
        <p>Segue abaixo o check-out do seu pedido:</p>
    `;
}

