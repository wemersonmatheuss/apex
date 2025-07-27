
function scrollCarrossel(direction) {
    const container = document.getElementById('cards');
    const card = container.querySelector('.card-wrapper');
    const cardWidth = card.offsetWidth + 30; // largura + gap

    container.scrollBy({
      left: direction * cardWidth,
      behavior: 'smooth',
    });
}


function scrollToFormulario() {
  const formSection = document.getElementById("section-formulario");
  if (formSection) {
    formSection.scrollIntoView({
      behavior: "smooth"
    });
  }
}


// Detecta quando 50% da seção está visível
const sectionFormulario = document.querySelector('.section-cta-form');

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionFormulario.classList.add('animate-form');
        observer.unobserve(sectionFormulario); // anima só uma vez
      }
    });
  },
  {
    threshold: 0.3 // 50% visível
  }
);

observer.observe(sectionFormulario);



// Animação dos cards do carrossel
const sectionCarrossel = document.querySelector('.carrossel');

const observerCarrossel = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionCarrossel.classList.add('animate-cards');
        observerCarrossel.unobserve(sectionCarrossel); // só uma vez
      }
    });
  },
  {
    threshold: 0.3
  }
);

observerCarrossel.observe(sectionCarrossel);


