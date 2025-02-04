const carousel = document.querySelector('.carousel');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

let index = 0; // Position actuelle
const totalItems = document.querySelectorAll('.grid-item').length;

// Fonction pour mettre à jour la position
function updateCarousel() {
    carousel.style.transform = `translateX(-${index * 100}%)`;
}

// Bouton suivant
nextButton.addEventListener('click', () => {
    if (index < totalItems - 1) {
        index++;
    } else {
        index = 0; // Retour au premier élément
    }
    updateCarousel();
});

// Bouton précédent
prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
    } else {
        index = totalItems - 1; // Aller au dernier élément
    }
    updateCarousel();
});
