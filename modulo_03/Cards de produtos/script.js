const container = document.getElementById('container');
const btnFiltrar = document.getElementById('btnFiltrar');
const btnLimpar = document.getElementById('btnLimpar');

// 1. Array de produtos
const produtos = [
    { nome: "Smartphone", preco: 2500, categoria: "Eletrônicos" },
    { nome: "Notebook", preco: 4500, categoria: "Eletrônicos" },
    { nome: "Cadeira Gamer", preco: 1200, categoria: "Móveis" },
    { nome: "Fone Bluetooth", preco: 300, categoria: "Eletrônicos" },
    { nome: "Mesa de Escritório", preco: 800, categoria: "Móveis" }
];

// 2. Função para criar e inserir os cards
produtos.forEach(produto => {
    const card = document.createElement('div');
    card.classList.add('card');
    
    // Adicionamos um atributo de dados para facilitar o filtro depois
    card.dataset.categoria = produto.categoria;

    // Formatação de moeda R$
    const precoFormatado = produto.preco.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });

    card.innerHTML = `
        <h3>${produto.nome}</h3>
        <p><strong>Preço:</strong> ${precoFormatado}</p>
        <p><strong>Categoria:</strong> ${produto.categoria}</p>
    `;

    container.appendChild(card);
});

// 3. Botão Filtrar (Alterna a exibição de quem NÃO é eletrônico)
btnFiltrar.addEventListener('click', () => {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        if (card.dataset.categoria !== "Eletrônicos") {
            card.classList.toggle('escondido');
        }
    });
});

// 4. Botão Limpar
btnLimpar.addEventListener('click', () => {
    container.innerHTML = '';
});
