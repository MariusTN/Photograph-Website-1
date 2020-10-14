// OOP - Hallo querySelector
let nav = document.querySelector('.nav-links');
let burger = document.querySelector('.burger');
let links = nav.querySelectorAll('a');

burger.addEventListener("click", () =>{
    nav.classList.toggle("nav-open");
    burger.classList.toggle("toggle");
});

links.forEach(link => {
    link.addEventListener('click', ()=> {
        nav.classList.toggle('nav-open');
        burger.classList.toggle("toggle");
    });
});