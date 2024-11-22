// script2.js

document.addEventListener('DOMContentLoaded', function() {
    // Função para exibir uma mensagem de boas-vindas na tela
    function showWelcomeMessage() {
        const messageDiv = document.createElement('div');
        messageDiv.id = 'welcomeMessage';
        messageDiv.textContent = 'Bem-vindo ao Portal Inclusivo! Explore nossos recursos e aprenda mais sobre acessibilidade.';
        document.body.appendChild(messageDiv);

        // Remover a mensagem após 5 segundos
        setTimeout(() => {
            messageDiv.style.opacity = '0';
            setTimeout(() => {
                document.body.removeChild(messageDiv);
            }, 1000); // Tempo para a transição de opacidade
        }, 5000);
    }

    // Função para alternar entre temas claro e escuro
    function toggleTheme() {
        document.body.classList.toggle('dark-theme');
    }

    // Função para validar o formulário de contato
    function validateForm(event) {
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (!nome || !email || !mensagem) {
            alert('Por favor, preencha todos os campos.');
            event.preventDefault();
        }
    }

    // Função para exibir mais informações ao clicar no botão "Explorar"
    function showMoreInfo() {
        const infoSection = document.createElement('section');
        infoSection.innerHTML = '<h3>Mais Informações</h3><p>Descubra como as tecnologias assistivas estão transformando a acessibilidade digital.</p>';
        document.querySelector('main').appendChild(infoSection);
    }

    // Função para adicionar um evento de clique ao botão "Explorar"
    const exploreBtn = document.getElementById('exploreBtn');
    if (exploreBtn) {
        exploreBtn.addEventListener('click', showMoreInfo);
    }

    // Adicionando evento de validação ao formulário
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', validateForm);
    }

    // Exibindo mensagem de boas-vindas ao carregar a página
    showWelcomeMessage();
});