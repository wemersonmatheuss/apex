
function scrollCarrossel(direction) {
    const container = document.getElementById('cards');
    const card = container.querySelector('.card-wrapper');
    const cardWidth = card.offsetWidth + 30; // largura + gap

    container.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth',
    });
}

