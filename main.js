const hMenu = document.querySelector('.fa-bars');
console.log(hMenu);

hMenu.addEventListener("click", function(){
    hMenu.classList.add(".hamburger-menu.active")
});
