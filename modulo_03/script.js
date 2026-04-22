
const btn = document.getElementById('btnCalcular');
const calcular = () => {
    // 1. Criação das variáveis a partir dos inputs
    const nome = document.getElementById('nome').value;
    const precoProduto = parseFloat(document.getElementById('preco').value);
    const percentualDesconto = parseFloat(document.getElementById('desconto').value);
    const divResultado = document.getElementById('resultado');

    // Validação inicial
    if (!nome || isNaN(precoProduto) || isNaN(percentualDesconto)) {
        alert("Preencha todos os campos!");
        return;
    }

    // 2. Cálculos do desconto e preço final
    const valorDesconto = (precoProduto * percentualDesconto) / 100;
    const precoFinal = precoProduto - valorDesconto;

    // 3. Operadores de comparação e lógicos
    const precoMaiorQue100 = precoProduto > 100;
    const descontoValido = percentualDesconto >= 0 && percentualDesconto <= 100;

    // 4. Exibição no CONSOLE com Template Literals (conforme solicitado)
    console.log(`Olá, ${nome}! O produto custa R$ ${precoProduto}`);
    console.log(`Desconto de ${percentualDesconto}%: R$ ${valorDesconto}`);
    console.log(`Preço final: R$ ${precoFinal}`);
    console.log(`Preço acima de R$ 100? ${precoMaiorQue100}`);
    console.log(`Desconto válido? ${descontoValido}`);

    // 5. Exibição no HTML para o usuário ver na tela
    divResultado.innerHTML = `
        <p>Olá, <strong>${nome}</strong>!</p>
        <p>Desconto: R$ ${valorDesconto.toFixed(2)}</p>
        <p><strong>Total: R$ ${precoFinal.toFixed(2)}</strong></p>
    `;
};

// Evento de clique
btn.addEventListener('click', calcular);
