document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            alert(`Obrigado por entrar em contato, ${name}!`);
            form.reset(); // Limpa o formulário
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
});
