// Função de manipulação do formulário de Cadastro de Tarefas
document.getElementById('formTarefa').onsubmit = (e) => {
    e.preventDefault();
  
    const descricao = document.getElementById('descricao').value;
    const setor = document.getElementById('setor').value;
    const usuario = document.getElementById('usuario').value;
    const prioridade = document.getElementById('prioridade').value;
  
    // Validação de campos obrigatórios
    if (!descricao || !setor || !usuario || !prioridade) {
      alert("Por favor, preencha todos os campos.");
      return;
    }
  
    // Salva os dados no localStorage (ou em um banco real)
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
    const tarefa = {
      id: tarefas.length + 1,
      descricao,
      setor,
      usuario,
      prioridade,
      status: "A fazer",
      dataCadastro: new Date().toISOString(),
    };
    tarefas.push(tarefa);
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
  
    // Exibe a mensagem de sucesso
    document.getElementById('mensagemSucesso').style.display = 'block';
  
    // Limpa os campos do formulário após o envio
    document.getElementById('formTarefa').reset();
  };
  
  // Função para carregar os usuários cadastrados no campo de seleção
  window.onload = () => {
    let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
    const usuarioSelect = document.getElementById('usuario');
  
    usuarios.forEach(usuario => {
      const option = document.createElement('option');
      option.value = usuario.id;
      option.textContent = usuario.nome;
      usuarioSelect.appendChild(option);
    });
  };
  