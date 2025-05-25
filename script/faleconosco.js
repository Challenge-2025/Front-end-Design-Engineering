document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form-fale-conosco');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nome = form.nome.value.trim();
    const email = form.email.value.trim();
    const telefone = form.telefone.value.trim();
    const mensagem = form.mensagem.value.trim();

    const telefoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

    if (!nome || !email || !mensagem) {
      alert('Por favor, preencha os campos obrigatórios: Nome, E-mail e Mensagem.');
      return;
    }

    if (telefone && !telefoneRegex.test(telefone)) {
      alert('Por favor, digite um número de celular válido no formato (11) 91234-5678.');
      form.reset();
      return;
    }

    alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso. Entraremos em contato pelo e-mail: ${email}`);

    form.reset();
  });
});
