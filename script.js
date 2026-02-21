// Lógica do Dark Mode not in use
const themeBtn = document.getElementById('theme-toggle');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark-theme');
        if (document.body.classList.contains('dark-theme')) {
            themeBtn.textContent = "☀️ Light Mode";
        } else {
            themeBtn.textContent = "🌙 Dark Mode";
        }
    });
}

// Lógica do Botão Voltar ao Topo
const backToTopBtn = document.getElementById('back-to-top');
if (backToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.style.display = 'flex'; // Usamos flex para manter o ícone centrado
        } else {
            backToTopBtn.style.display = 'none';
        }
    });

    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Título Dinâmico
let docTitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Volta aqui! 👋";
});
window.addEventListener("focus", () => {
    document.title = docTitle;
});

// Validação do form
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        if (name && email && message) {
            form.submit();
        } else {
            alert('Por favor, preencha todos os campos.');
        }
    });
}
