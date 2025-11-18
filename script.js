const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');
const closeBtn = document.getElementById('close-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.add('menu-hidden');
});

closeBtn.addEventListener("click", ()=> {
    menu.classList.remove('menu-hidden');  
}) 