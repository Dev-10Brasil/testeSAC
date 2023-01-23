const nome = document.getElementById("nome");
const telefone = document.getElementById("telefone");
const celular = document.getElementById("celular");
const mail = document.getElementById("mail");
const cep = document.getElementById("cep");
const estado = document.getElementById("estado");
const cidade = document.getElementById("cidade");
const acao = document.getElementById("acao");
const setor = document.getElementById("setor");
const tentativas = document.getElementById("tentativas");
const prefere = document.getElementById("prefere");
const feedback = document.getElementById("feedback");

nome.addEventListener("input", function (aviso) {
    if (nome.validity.typeMismatch) {
      nome.setCustomValidity("Por favor, digite o seu nome completo.");
    }
     else {
      nome.setCustomValidity("");
    }
});

telefone.addEventListener("input", function (aviso) {
    if (telefone.validity.typeMismatch) {
      telefone.setCustomValidity("Por favor, digite um número de telefone válido.");
    } else {
      telefone.setCustomValidity("");
    }
});

celular.addEventListener("input", function (aviso) {
    if (celular.validity.typeMismatch) {
      celular.setCustomValidity("Por favor, digite um número de telefone válido.");
    } else {
      celular.setCustomValidity("");
    }
});

mail.addEventListener("input", function (aviso) {
    if (mail.validity.typeMismatch) {
      mail.setCustomValidity("Por favor, digite um e-mail válido.");
    } else {
      mail.setCustomValidity("");
    }
});

cep.addEventListener("input", function (aviso) {
    if (cep.validity.typeMismatch) {
      cep.setCustomValidity("Por favor, digite um CEP válido");
    } else {
      cep.setCustomValidity("");
    }
});
