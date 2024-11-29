// Função de validação de e-mail
function validarEmail(email) {
  const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  return regex.test(email);
}

// Função de manipulação do formulário
document.getElementById('formUsuario').onsubmit = (e) => {
  e.preventDefault();

  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;

  // Validação de campos
  if (!nome || !email) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  // Validação de e-mail
  if (!validarEmail(email)) {
    alert("Por favor, insira um e-mail válido.");
    return;
  }

  // Salva os dados no localStorage (ou em um banco real)
  let usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];
  const usuario = { id: usuarios.length + 1, nome, email };
  usuarios.push(usuario);
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  // Exibe a mensagem de sucesso
  document.getElementById('mensagemSucesso').style.display = 'block';

  // Limpa os campos do formulário após o envio
  document.getElementById('formUsuario').reset();
};
