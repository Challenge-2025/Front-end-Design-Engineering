document.addEventListener('DOMContentLoaded', function () {
  const botao = document.getElementById('btn-cadastrar');

  botao.addEventListener('click', function () {
    const inputs = document.querySelectorAll('.inputs');
    let dados = {};
    let valido = true;
    let camposVazios = false;

    // Limpa bordas antes de validar
    inputs.forEach(input => {
      input.style.border = 'none';
    });

    // Verifica se há campos vazios
    inputs.forEach(input => {
      const valor = input.value.trim();
      if (valor === '') {
        camposVazios = true;
        input.style.border = '2px solid red';
      }
    });

    if (camposVazios) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    // Validações específicas
    inputs.forEach(input => {
      const valor = input.value.trim();
      const nome = input.placeholder;

      if (nome === 'Nome completo') {
        if (valor.split(' ').length < 2) {
          valido = false;
          input.style.border = '2px solid red';
          alert('Digite o nome completo (com pelo menos 2 palavras).');
          return;
        }
      }

      if (nome === 'CPF') {
        const cpfRegex = /^\d{3}\.?\d{3}\.?\d{3}\-?\d{2}$/;
        if (!cpfRegex.test(valor)) {
          valido = false;
          input.style.border = '2px solid red';
          alert('CPF inválido. Use o formato 000.000.000-00 ou apenas números.');
          return;
        }
      }

      if (nome === 'Número de celular') {
        const celularRegex = /^\(?\d{2}\)?[\s-]?\d{5}[\s-]?\d{4}$/;
        if (!celularRegex.test(valor)) {
          valido = false;
          input.style.border = '2px solid red';
          alert('Número de celular inválido. Exemplo: (11) 91234-5678');
          return;
        }
      }

      if (nome === 'CEP') {
        const cepRegex = /^\d{5}-?\d{3}$/;
        if (!cepRegex.test(valor)) {
          valido = false;
          input.style.border = '2px solid red';
          alert('CEP inválido. Exemplo: 12345-678 ou 12345678');
          return;
        }
      }

      dados[nome] = valor;
    });

    if (!valido) {
      return;
    }

    // Se tudo for válido
    console.log('Dados válidos:', dados);
    alert('Cadastro realizado com sucesso!');
    window.location.href = '../index.html';
  });
});
