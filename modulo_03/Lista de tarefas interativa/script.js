const form = document.getElementById('todo-form');
const input = document.getElementById('nova-tarefa');
const lista = document.getElementById('lista-tarefas');
const busca = document.getElementById('busca');

// Carregar tarefas do localStorage ao iniciar
let tarefasSalvas = JSON.parse(localStorage.getItem('tarefas')) || [];

function salvarNoStorage() {
    localStorage.setItem('tarefas', JSON.stringify(tarefasSalvas));
}

function renderizarTarefas() {
    lista.innerHTML = '';
    tarefasSalvas.forEach((tarefa, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span class="${tarefa.concluida ? 'concluida' : ''}">${tarefa.texto}</span>
            <button class="btn-remover" data-index="${index}">X</button>
        `;
        li.dataset.id = index;
        lista.appendChild(li);
    });
}

// Adicionar Tarefa
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    
    if (texto) {
        tarefasSalvas.push({ texto, concluida: false });
        input.value = '';
        salvarNoStorage();
        renderizarTarefas();
    }
});

// Delegação de Eventos (Riscado e Remover)
lista.addEventListener('click', (e) => {
    const target = e.target;
    const index = target.closest('li').dataset.id;

    if (target.classList.contains('btn-remover')) {
        tarefasSalvas.splice(index, 1);
    } else {
        tarefasSalvas[index].concluida = !tarefasSalvas[index].concluida;
    }
    
    salvarNoStorage();
    renderizarTarefas();
});

// Filtro de Busca (Tempo Real)
busca.addEventListener('input', (e) => {
    const termo = e.target.value.toLowerCase();
    const itens = lista.querySelectorAll('li');

    itens.forEach(item => {
        const texto = item.innerText.toLowerCase();
        item.classList.toggle('escondido', !texto.includes(termo));
    });
});

// Inicialização
renderizarTarefas();
