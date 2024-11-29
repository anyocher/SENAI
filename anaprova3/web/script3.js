// Função para carregar e exibir as tarefas nas respectivas colunas
window.onload = () => {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    
    // Divisão das tarefas por status
    const aFazer = document.getElementById('tarefasAFazer');
    const fazendo = document.getElementById('tarefasFazendo');
    const pronto = document.getElementById('tarefasPronto');
    
    // Limpando as listas de tarefas antes de adicionar
    aFazer.innerHTML = '';
    fazendo.innerHTML = '';
    pronto.innerHTML = '';
    
    tarefas.forEach(tarefa => {
      const tarefaDiv = document.createElement('div');
      tarefaDiv.classList.add('task');
      tarefaDiv.innerHTML = `
        <p><strong>Descrição:</strong> ${tarefa.descricao}</p>
        <p><strong>Setor:</strong> ${tarefa.setor}</p>
        <p><strong>Prioridade:</strong> ${tarefa.prioridade}</p>
        <p><strong>Usuário:</strong> ${tarefa.usuario}</p>
        <p><strong>Status:</strong> ${tarefa.status}</p>
        <button onclick="editarTarefa(${tarefa.id})">Editar Tarefa</button>
        <button onclick="excluirTarefa(${tarefa.id})">Excluir</button>
        <div>
          <button onclick="atualizarStatus(${tarefa.id}, 'A Fazer')">A Fazer</button>
          <button onclick="atualizarStatus(${tarefa.id}, 'Fazendo')">Fazendo</button>
          <button onclick="atualizarStatus(${tarefa.id}, 'Pronto')">Pronto</button>
        </div>
      `;
      // Adicionando a tarefa à coluna correspondente
      if (tarefa.status === 'A Fazer') aFazer.appendChild(tarefaDiv);
      if (tarefa.status === 'Fazendo') fazendo.appendChild(tarefaDiv);
      if (tarefa.status === 'Pronto') pronto.appendChild(tarefaDiv);
    });
  };
  
  // Função para editar a tarefa
  function editarTarefa(id) {
    localStorage.setItem("idTarefaEditar", id);
    window.location.href = "cadastro-tarefas.html"; // Redirecionar para a tela de edição
  }
  
  // Função para excluir a tarefa
  function excluirTarefa(id) {
    if (confirm("Tem certeza que deseja excluir esta tarefa?")) {
      let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
      tarefas = tarefas.filter(tarefa => tarefa.id !== id);
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
      window.location.reload(); // Recarregar a página para refletir a exclusão
    }
  }
  
  // Função para atualizar o status da tarefa
  function atualizarStatus(id, novoStatus) {
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    const tarefa = tarefas.find(tarefa => tarefa.id === id);
    
    if (tarefa) {
      tarefa.status = novoStatus;
      localStorage.setItem("tarefas", JSON.stringify(tarefas));
      window.location.reload(); // Recarregar a página para refletir a mudança de status
    }
  }
  
  // Função para carregar dados da tarefa para edição
  function carregarTarefaEdicao() {
    const id = localStorage.getItem('idTarefaEditar');
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    const tarefa = tarefas.find(t => t.id === parseInt(id));
  
    if (tarefa) {
      // Preencher os campos de edição com os dados da tarefa
      document.getElementById('descricao').value = tarefa.descricao;
      document.getElementById('setor').value = tarefa.setor;
      document.getElementById('prioridade').value = tarefa.prioridade;
      document.getElementById('usuario').value = tarefa.usuario;
      document.getElementById('status').value = tarefa.status;
    } else {
      alert("Tarefa não encontrada.");
    }
  }
  
  // Função para salvar as edições de uma tarefa
  function salvarEdicao() {
    const id = localStorage.getItem('idTarefaEditar');
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    const tarefaIndex = tarefas.findIndex(t => t.id === parseInt(id));
  
    if (tarefaIndex !== -1) {
      tarefas[tarefaIndex] = {
        id: parseInt(id),
        descricao: document.getElementById('descricao').value,
        setor: document.getElementById('setor').value,
        prioridade: document.getElementById('prioridade').value,
        usuario: document.getElementById('usuario').value,
        status: document.getElementById('status').value
      };
  
      localStorage.setItem('tarefas', JSON.stringify(tarefas));
      window.location.href = 'gerenciar-tarefas.html'; // Redireciona após a edição
    }
  }
  
  // Função para salvar uma nova tarefa
  function salvarTarefa() {
    const descricao = document.getElementById('descricao').value;
    const setor = document.getElementById('setor').value;
    const prioridade = document.getElementById('prioridade').value;
    const usuario = document.getElementById('usuario').value;
    const status = 'A Fazer'; // Ou o status selecionado
  
    const novaTarefa = {
      id: Date.now(), // Usando o timestamp como ID único
      descricao,
      setor,
      prioridade,
      usuario,
      status
    };
  
    let tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];
    tarefas.push(novaTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  
  }
  