
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


// Animação da seção de clientes (efeito zoom stagger)
const sectionClientes = document.querySelector('.clientes');

const observerClientes = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        sectionClientes.classList.add('animate-clientes');
        observerClientes.unobserve(sectionClientes); // anima só uma vez
      }
    });
  },
  {
    threshold: 0.5
  }
);

observerClientes.observe(sectionClientes);



const metodoSection = document.querySelector('.metodo');

const observerMetodo = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        metodoSection.classList.add('animate-metodo');
        observerMetodo.unobserve(metodoSection);
      }
    });
  },
  {
    threshold: 0.5
  }
);

observerMetodo.observe(metodoSection);



const agregarSection = document.querySelector('.agregar');

const observerAgregar = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        agregarSection.classList.add('animate-agregar');
        observerAgregar.unobserve(agregarSection);
      }
    });
  },
  {
    threshold: 0.5
  }
);

observerAgregar.observe(agregarSection);


//  const scriptURL = 'https://script.google.com/macros/s/AKfycbzS5wyg5RctV5W9yB6S8G7NHPvs1RRvirbmZ30rJDhu752dwtH3yy3CMOApIZ56IkLO/exec';
//   const form = document.getElementById('meuFormulario');
//   const mensagem = document.getElementById('mensagem');

//   form.addEventListener('submit', e => {
//     e.preventDefault();
//     const formData = new FormData(form);

//     fetch(scriptURL, { method: 'POST', body: formData })
//       .then(response => {
//         mensagem.innerText = "Dados enviados com sucesso!";
//         form.reset();
//       })
//       .catch(error => {
//         mensagem.innerText = "Erro ao enviar. Tente novamente.";
//         console.error('Erro:', error);
//       });
//   });
