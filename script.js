// Efecto de aparición suave para el texto
window.addEventListener('DOMContentLoaded', () => {
    const title = document.querySelector('h1');
    const subtitle = document.querySelector('p');
    const button = document.querySelector('button');

    // Retrasos para que aparezcan uno tras otro
    setTimeout(() => { title.style.opacity = '1'; title.style.transform = 'translateY(0)'; }, 300);
    setTimeout(() => { subtitle.style.opacity = '1'; subtitle.style.transform = 'translateY(0)'; }, 600);
    setTimeout(() => { button.style.opacity = '1'; button.style.transform = 'translateY(0)'; }, 900);
});

// Efecto simple al pasar el mouse por el título
document.querySelector('h1').addEventListener('mouseover', function() {
    this.style.textShadow = "0 0 40px #ff0055, 0 0 80px #ff0055";
});

document.querySelector('h1').addEventListener('mouseout', function() {
    this.style.textShadow = "0 0 20px #ff0055";
});