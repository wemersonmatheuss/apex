
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


const scriptURL = 'https://script.google.com/macros/s/AKfycbwT_bJDMjTMDVELNa1FRabZk-uztDWIKHuyqYZVRUlwkkyDcd5vpA_XGx34zUKCpHrp/exec'; // troque por sua URL real

  document.getElementById('meuFormulario').addEventListener('submit', function(e) {
    e.preventDefault();

    const formData = new FormData(this);

    fetch(scriptURL, {
      method: 'POST',
      body: formData
    })
    .then(response => {
      if (response.ok) {
        alert("Enviado com sucesso!");
        this.reset(); // limpa o formulário
      } else {
        alert("Erro no envio. Verifique a planilha.");
      }
    })
    .catch(error => {
      alert("Erro ao enviar. Tente novamente.");
      console.error("Erro:", error);
    });
  });
