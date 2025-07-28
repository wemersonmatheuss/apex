
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


 const form = document.getElementById("meuFormulario");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const formData = new FormData(form);
    const searchParams = new URLSearchParams();

    formData.forEach((value, key) => {
      searchParams.append(key, value);
    });

    fetch("https://script.google.com/macros/s/AKfycbw2jxdSMezDd0lOa19D3Nmn1vN87ueykYBWFFwJnA5z1ygszaChgZIOnQ7gpPxdtPJJ/exec", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: searchParams.toString(),
    })
    .then(response => response.text())
    .then(text => {
      if(text.trim() === "OK"){
        form.reset();
        // não precisa mostrar nada
      } else {
        console.error("Erro no envio:", text);
      }
    })
    .catch(err => {
      console.error("Erro ao enviar formulário:", err);
    });
  });
