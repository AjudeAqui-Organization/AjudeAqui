// Scroll to Top Button
const scrollToTopBtn = document.getElementById('scrollToTop');

// Mostra/esconde o botão ao rolar a página
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        scrollToTopBtn.classList.add('show');
    } else {
        scrollToTopBtn.classList.remove('show');
    }
});

// Volta ao topo ao clicar no botão
scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
