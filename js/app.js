import { proyectos } from "../db/db.js";



document.querySelector(".bars__menu").addEventListener("click", toggleMenu);

var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function toggleMenu() {
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");

    document.querySelector(".header-container nav").classList.toggle("menu-open");
}

const checkServices = document.querySelectorAll(".li_container_card_service")
checkServices.forEach((item) => {
    item.addEventListener('change', (e) => {
        const cardContainer = e.target.closest('.li_container_card_service');

        if (e.target.checked) {
            cardContainer.querySelector('.card_decoration_block_hor').classList.add('card-services-checked');
            cardContainer.querySelector('.card_decoration_block_ver').classList.add('card-services-checked');
            cardContainer.querySelector('.image-card-decoration-red').classList.add('image-services-checked-red');
            cardContainer.querySelector('.image-card-decoration-white').classList.add('image-services-checked-white');
        } else {
            cardContainer.querySelector('.card_decoration_block_hor').classList.remove('card-services-checked');
            cardContainer.querySelector('.card_decoration_block_ver').classList.remove('card-services-checked');
            cardContainer.querySelector('.image-card-decoration-red').classList.remove('image-services-checked-red');
            cardContainer.querySelector('.image-card-decoration-white').classList.remove('image-services-checked-white');
        }
    });
});

//  INICIO JAVASCRIPT LENGUAJES
//         |
//         V

const flagsElement = document.getElementById("flags")
const flagsElementResponsive = document.getElementById("flagsResponsive")
const textsToChange = document.querySelectorAll("[data-section]")

const changeLanguage = async language=>{
  const requestJson = await fetch(`./languages/${language}.json`)
  const texts = await requestJson.json()

  for(const textToChange of textsToChange){
    const section = textToChange.dataset.section
    const value = textToChange.dataset.value

    textToChange.innerHTML = texts[section][value]
  }
  
} 

flagsElement.addEventListener("click", (e) =>{
  changeLanguage(e.target.parentElement.dataset.language)
})

flagsElementResponsive.addEventListener("click", (e) =>{
  changeLanguage(e.target.parentElement.dataset.language)
})

//funcion de ir arriba
document.addEventListener('DOMContentLoaded', function() {
  var irArriba = document.querySelector('.ir-arriba');

  irArriba.addEventListener('click', function() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('scroll', function() {
    if (window.scrollY > 0) {
      irArriba.style.display = 'block';
    } else {
      irArriba.style.display = 'none';
    }
  });
});

//  FIN JAVASCRIPT LENGUAJES
//         ^
//         |


// PRUEBA ANIMACIONES
//

ScrollReveal().reveal('.first-sec', { delay: 400 });
ScrollReveal().reveal('.container_our_services', { delay: 400 });
ScrollReveal().reveal('.ourProjects', { delay: 400 });
ScrollReveal().reveal('.containerCards', { delay: 400 });
ScrollReveal().reveal('.form', { delay: 400 });
ScrollReveal().reveal('.content_footer', { delay: 400 });

//
//

// Selectores para filtro
const category = document.querySelector(".category-flex");
const URLBase = "http://localhost:3000";
const containerCards = document.querySelector(".containerCards");
const show_all = document.querySelector("#show_all");
const designBranding = document.querySelector("#designBrandingl");
const dev = document.querySelector("#dev");
const uiDesigns = document.querySelector("#uiDesigns");
//let proyectos = [];
// Filtra categoria por proyecto

document.addEventListener("DOMContentLoaded", async function () {
  // proyectos = await getProyectos();
  mostrarProyectos(proyectos, false);
});

const datosProyecto = {
  category: "",
};

// Eventos
category.querySelectorAll("input").forEach((input) => {
  input.addEventListener("input", function (e) {
    console.log(e.target.value);
    filtrarProyecto(e.target.value);
  });
});

// category.addEventListener("input", function (event) {
// datosProyecto.category = event.target.value;
// })

// category.addEventListener("input", function (event) {
// datosProyecto.category = event.target.value;

// filtrarProyecto();
// })

//Funciones
function filtrarProyecto(value) {
  const proyectosFiltrados = proyectos.filter(
    (proyecto) => proyecto.category === value
  );
  console.log("proyectos filtrados", proyectosFiltrados);
  if (value == "show_all") {
    console.log(proyectos);

    return mostrarProyectos(proyectos, true);
  }

  mostrarProyectos(proyectosFiltrados, false);
}

async function getProyectos() {
  const proyectos = await fetch(`${URLBase}/proyectos`);
  const respuesta = await proyectos.json();
  return respuesta;
}

function mostrarProyectos(proyectos, show_all) {
  limpiarHTML();
  if (show_all){
    proyectos.forEach((proyecto) => {
        console.log(proyecto.URL);
        containerCards.innerHTML += `
            <a target="_blank" href="${proyecto.URL}" class=" flex flex-col" >
            <div class="card">
            <img class = "w-full h-full object-cover rounded-xl" src="${proyecto.img}" alt="">
                <div class="card-info">
                    <h1></h1>
                </div>
            </div>
            <div class="text-white mt-5">
                <div class="card-title text-white">
                </div>
                <div>
                    <h4 class="">${proyecto.name}</h4>
                </div>
            </div>
        </a>`;
      });
  }else{
    proyectos.slice(0, 6).forEach((proyecto) => {
        console.log(proyecto.URL);
        containerCards.innerHTML += `
            <a target="_blank" href="${proyecto.URL}" class=" flex flex-col" >
            <div class="card">
            <img class = "w-full h-full object-cover rounded-xl" src="${proyecto.img}" alt="">
                <div class="card-info">
                    <h1></h1>
                </div>
            </div>
            <div class="text-white mt-5">
                <div class="card-title text-white">
                </div>
                <div>
                    <h4 class="">${proyecto.name}</h4>
                </div>
            </div>
        </a>`;
      });
  }
  
}

function limpiarHTML() {
  while (containerCards.firstChild) {
    containerCards.removeChild(containerCards.firstChild);
  }
}
