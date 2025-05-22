document.addEventListener('DOMContentLoaded', function () {
  const botaoEntrar = document.querySelector('.btn-entrar');
  const inputCpf = document.querySelector('.input-cpf');
  const inputSenha = document.querySelector('.input-senha');

  botaoEntrar.addEventListener('click', function (event) {
    event.preventDefault();

    const cpf = inputCpf.value.trim();
    const senha = inputSenha.value.trim();

    // Verifica se todos os campos estão preenchidos
    if (cpf === '' || senha === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Verifica se o CPF é válido
    if (!validarCPF(cpf)) {
      alert('CPF inválido. Verifique e tente novamente.');
      return;
    }

    alert('Login feito com sucesso!');
    window.location.href = '../index.html';
  });

  function validarCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');

    if (cpf.length !== 11 || /^(\d)\1{10}$/.test(cpf)) {
      return false;
    }

    let soma = 0;
    for (let i = 0; i < 9; i++) {
      soma += parseInt(cpf.charAt(i)) * (10 - i);
    }

    let digito1 = 11 - (soma % 11);
    if (digito1 > 9) digito1 = 0;
    if (parseInt(cpf.charAt(9)) !== digito1) return false;

    soma = 0;
    for (let i = 0; i < 10; i++) {
      soma += parseInt(cpf.charAt(i)) * (11 - i);
    }

    let digito2 = 11 - (soma % 11);
    if (digito2 > 9) digito2 = 0;
    if (parseInt(cpf.charAt(10)) !== digito2) return false;

    return true;
  }
});
