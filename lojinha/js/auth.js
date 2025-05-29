function registrar() {
  const usuario = document.getElementById("registroUsuario").value.trim();
  const senha = document.getElementById("registroSenha").value;
  const senhaConfirma = document.getElementById("registroSenhaConfirma").value;

  if (!usuario || !senha || !senhaConfirma) {
    alert("Preencha todos os campos.");
    return;
  }

  if (senha !== senhaConfirma) {
    alert("As senhas não coincidem.");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");

  if (usuarios[usuario]) {
    alert("Usuário já existe.");
    return;
  }

  usuarios[usuario] = senha;
  localStorage.setItem("usuarios", JSON.stringify(usuarios));

  alert("Registro realizado com sucesso! Faça login.");
  window.location.href = "index.html";
}

function login() {
  const usuario = document.getElementById("loginUsuario").value.trim();
  const senha = document.getElementById("loginSenha").value;

  if (!usuario || !senha) {
    alert("Preencha todos os campos.");
    return;
  }

  let usuarios = JSON.parse(localStorage.getItem("usuarios") || "{}");

  if (usuarios[usuario] && usuarios[usuario] === senha) {
    localStorage.setItem("logado", usuario);
    alert("Login realizado!");
    window.location.href = "loja.html";
  } else {
    alert("Usuário ou senha incorretos.");
  }
}

function logout() {
  localStorage.removeItem("logado");
  alert("Você saiu da conta.");
  window.location.href = "index.html";
}

function isLogado() {
  return localStorage.getItem("logado") !== null;
}
