const btnMenu = document.getElementById('menu');
const menu = document.querySelector('.menu');

btnMenu.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('hidden');
    });
});