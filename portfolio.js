
const mobileMenu = document.getElementById('Abrir-menu'); // Botão abrir menu
const menu = document.getElementById('menu-mobile'); // Menu mobile
const overlay = document.querySelector('.overlayy-menu'); // Overlay
const closeMenu = document.querySelector('.menu-mobile .fechar i'); // Ícone fechar

// Abrir o menu
mobileMenu.addEventListener('click', () => {
    menu.classList.add('menu-abrir');
    overlay.classList.add('ativo'); // Mostra o overlay
});

// Fechar o menu ao clicar no ícone de fechar
closeMenu.addEventListener('click', () => {
    menu.classList.remove('menu-abrir');
    overlay.classList.remove('ativo'); // Esconde o overlay
});

// Fechar o menu ao clicar no overlay
overlay.addEventListener('click', () => {
    menu.classList.remove('menu-abrir');
    overlay.classList.remove('ativo'); // Esconde o overlay
});
