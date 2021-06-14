// Constantes
const BTN_MENU = document.querySelector('#btnMenu');
const MENU_COLLAPSE = document.querySelector('.menu-collapse');

// Añade el evento Listener al botón del menú
BTN_MENU.addEventListener("click", openMenu);

// Función que abre o cierra el menú de navegación el la versión mobile
function openMenu() {
    if(MENU_COLLAPSE.classList.contains("h-0")) {
        MENU_COLLAPSE.classList.replace('h-0', 'h-screen');
    } else {
        MENU_COLLAPSE.classList.replace('h-screen', 'h-0');
    }
}
