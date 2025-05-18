document.addEventListener('DOMContentLoaded', function () {
  const botaoEntrar = document.querySelector('.btn-entrar');
  const inputCpf = document.querySelector('.input-cpf');
  const inputSenha = document.querySelector('.input-senha');

  botaoEntrar.addEventListener('click', function () {
    const cpf = inputCpf.value.trim();
    const senha = inputSenha.value.trim();

    if (cpf !== '' && senha !== '') {
      alert('Login feito com sucesso!');
      
      window.location.href = '../index.html';
    } else {
      alert('Por favor, preencha todos os campos.');
    }
  });
});
