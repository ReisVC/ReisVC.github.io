// Smooth scroll for navigation buttons
document.querySelectorAll('.nav-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);

        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

const cars = [
    {
        name: 'Carro 1',
        description: 'Descrição do Carro 1.',
        image: 'imagem/foto1.jpg'
    },
    {
        name: 'Carro 2',
        description: 'Descrição do Carro 2.',
        image: 'imagem/foto2.jpg' 
    },
    {
        name: 'Carro 3',
        description: 'Descrição do Carro 3.',
        image: 'imagem/foto3.jpg' 
    }
];



function loadCars() {
    const carGallery = document.querySelector('.car-gallery');
    carGallery.innerHTML = '';

    cars.forEach(car => {
        const carItem = document.createElement('div');
        carItem.classList.add('car-item');

        carItem.innerHTML = `
            <img src="${car.image}" alt="${car.name}">
            <h3>${car.name}</h3>
            <p>${car.description}</p>
            <a href="#" class="btn">Alugar Agora</a>
        `;

        carGallery.appendChild(carItem);
    });
}

// Carregar carros quando a página for carregada
document.addEventListener('DOMContentLoaded', loadCars);
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
});

scrollToTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});
//---------------------------------------------------------
var btn = document.querySelector('#show-or-hide'); 
var container = document.querySelector('#container')

btn.addEventListener('click', function(){
    if(container.style.display==='flex'){
        container.style.display='none';
        
    }
    else{
        container.style.display='flex';
    }
})
//-----------------------------------------------------------

var btn1 = document.querySelector('#show-or-hide1'); 
var container1 = document.querySelector('#container1')

btn1.addEventListener('click', function(){
    if(container1.style.display==='flex'){
        container1.style.display='none';
        
    }
    else{
        container1.style.display='flex';
    }
})
//-----------------------------------------------------------

var btn2 = document.querySelector('#show-or-hide2'); 
var container2 = document.querySelector('#container2')

btn2.addEventListener('click', function(){
    if(container2.style.display==='block'){
        container2.style.display='none';
        
    }
    else{
        container2.style.display='block';
    }
})
//-----------------------------------------------------------

var btn3 = document.querySelector('#show-or-hide3'); 
var container3 = document.querySelector('#container3')

btn3.addEventListener('click', function(){
    if(container3.style.display==='block'){
        container3.style.display='none';
        
    }
    else{
        container3.style.display='block';
    }
})

//-----------------------------------------------------------

var btn4 = document.querySelector('#show-or-hide4'); 
var container4 = document.querySelector('#container4')

btn4.addEventListener('click', function(){
    if(container4.style.display==='block'){
        container4.style.display='none';
        
    }
    else{
        container4.style.display='block';
    }
})