// Toggle menu

let menuBtn = document.querySelector('.toggle')
let crossBtn = document.querySelector('.toggle-cross')
let navList = document.querySelector('.nav-list')

menuBtn.addEventListener('click', () => {
    navList.classList.toggle('active')

    menuBtn.style.display = "none";
    crossBtn.style.display = "block";
});

crossBtn.addEventListener('click', () => {
    navList.classList.remove('active');

    crossBtn.style.display = "none";
    menuBtn.style.display = "block";
});