// Constantes
const BTN_MENU = document.querySelector('#btnMenu');
const MENU_COLLAPSE = document.querySelector('.menu-collapse');
const BTN_SEARCH = document.querySelector('#btnSearch');
const SEARCH_COLLAPSE = document.querySelector('.search-collapse');

// Variables
let viewportWidth = window.matchMedia("(min-width: 768px)");

// Añade el evento Listener al botón del menú
BTN_MENU.addEventListener("click", openMenu);

// Añade el evento Listener al botón de buscar
BTN_SEARCH.addEventListener("click", openSearch);

// Función que abre o cierra el menú de navegación el la versión mobile
function openMenu() {
    if(MENU_COLLAPSE.classList.contains("h-0")) {
        MENU_COLLAPSE.classList.replace('h-0', 'h-screen');
        MENU_COLLAPSE.classList.add('z-50');
        SEARCH_COLLAPSE.classList.replace('h-screen', 'h-0');
    } else {
        MENU_COLLAPSE.classList.replace('h-screen', 'h-0');
        MENU_COLLAPSE.classList.remove('z-50');
    }
}

// Función que abre o cierra el menú de navegación el la versión mobile
function openSearch() {

    if(viewportWidth.matches) {
        openSearchDesktop();
    } else {
        openSearchMobile();
    }
}

function openSearchMobile() {
    if(SEARCH_COLLAPSE.classList.contains("h-0")) {
        SEARCH_COLLAPSE.classList.replace('h-0', 'h-screen');
        SEARCH_COLLAPSE.classList.add('z-50');
        MENU_COLLAPSE.classList.replace('h-screen', 'h-0');
    } else {
        SEARCH_COLLAPSE.classList.replace('h-screen', 'h-0');
        SEARCH_COLLAPSE.classList.remove('z-50');
    }
}

function openSearchDesktop() {
    if(SEARCH_COLLAPSE.classList.contains("md:w-0")) {
        SEARCH_COLLAPSE.classList.replace('md:w-0', 'md:w-96');
        SEARCH_COLLAPSE.classList.replace('md:pl-0', 'md:pl-4');
    } else {
        SEARCH_COLLAPSE.classList.replace('md:w-96', 'md:w-0');
        SEARCH_COLLAPSE.classList.replace('md:pl-4', 'md:pl-0');
    }
}