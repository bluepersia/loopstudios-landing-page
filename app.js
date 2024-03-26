
const menu = document.querySelector ('.menu');

document.querySelector ('.btn-menu').addEventListener ('click', openMenu);
document.querySelector ('.menu_btn-close').addEventListener ('click', closeMenu);

function openMenu ()
{
    menu.classList.add ('open');
}


function closeMenu () 
{
    menu.classList.remove ('open');
}