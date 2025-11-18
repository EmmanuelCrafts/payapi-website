const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('menu-slide');
});

closeBtn.addEventListener("click", ()=> {
    menu.classList.remove('menu-slide');  
}) 