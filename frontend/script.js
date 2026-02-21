async function login() {
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;

    const response = await fetch("http://localhost:3000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ usuario, senha })
    });

    const data = await response.json();

    if (data.sucesso) {
        window.location = "dashboard.html";
    } else {
        alert("Login inválido");
    }
}

function logout() {
    window.location = "login.html";
}

async function salvar() {
    const pessoa = {
        nome: document.getElementById("nome").value,
        cpf: document.getElementById("cpf").value,
        cidade: document.getElementById("cidade").value,
        estado: document.getElementById("estado").value
    };

    await fetch("http://localhost:3000/pessoas", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pessoa)
    });

    alert("Salvo com sucesso!");
}

async function carregarPessoas() {
    const response = await fetch("http://localhost:3000/pessoas");
    const data = await response.json();

    let tabela = document.getElementById("tabela");
    tabela.innerHTML = "";

    data.forEach(p => {
        tabela.innerHTML += `<tr>
        <td>${p.nome}</td>
        <td>${p.cpf}</td>
        <td>${p.cidade}</td>
        <td>${p.estado}</td>
        </tr>`;
    });
}

async function carregarUsuarios() {
    const response = await fetch("http://localhost:3000/usuarios");
    const data = await response.json();

    let tabela = document.getElementById("usuarios");
    tabela.innerHTML = "";

    data.forEach(u => {
        tabela.innerHTML += `<tr>
        <td>${u.usuario}</td>
        <td>${u.nivel}</td>
        </tr>`;
    });
}

if (document.getElementById("tabela")) carregarPessoas();
if (document.getElementById("usuarios")) carregarUsuarios();