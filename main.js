const iconaH = document.querySelector('.fa-bars');
const hMenu = document.querySelector('.hamburger-menu');
const iconaC = document.querySelector('.fa-times')

iconaH.addEventListener("click", apriMenu);

function apriMenu(){
    hMenu.classList.add('active');
}

iconaC.addEventListener("click", chiudiMenu);

function chiudiMenu(){
    hMenu.classList.remove('active');
}