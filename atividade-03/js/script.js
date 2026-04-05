document.addEventListener('DOMContentLoaded', () => {
    // Seletor de Cores 
    const inputCorFundo = document.getElementById('cor-fundo');
    const inputCorTexto = document.getElementById('cor-texto');

    if (inputCorFundo) {
        inputCorFundo.addEventListener('input', (e) => {
            
            document.body.style.backgroundImage = 'none';
            document.body.style.backgroundColor = e.target.value;
        });
    }

    if (inputCorTexto) {
        inputCorTexto.addEventListener('input', (e) => {
            document.body.style.color = e.target.value;
        });
    }

    // Lógica do menu sanduíche (Mobile)
    const menuToggle = document.getElementById('menu-toggle');
    const navMenu = document.getElementById('nav-menu');

    if (menuToggle && navMenu) {
        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });
    }
});