document.addEventListener('DOMContentLoaded', function() {
    const botaoCadastrar = document.getElementById('btn-cadastrar');
    const inputs = document.querySelector('.inputs');

    botaoCadastrar.addEventListener('click', function() {
        const input = inputs.value.trim();
        if (input !== '') {
            alert('Login feito com sucesso');
            window.location.href = '../index.html';
        } else {
            alert('Por favor, preencha todos os campos');
        }
    });
});