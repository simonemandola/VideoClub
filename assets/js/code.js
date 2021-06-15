// Constantes
const BTN_MENU = document.querySelector('#btnMenu');
const MENU_COLLAPSE = document.querySelector('.menu-collapse');
const BTN_SEARCH = document.querySelector('#btnSearch');
const SEARCH_COLLAPSE = document.querySelector('.search-collapse');

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
        MENU_COLLAPSE.classList.remove('opacity-0');
    } else {
        MENU_COLLAPSE.classList.replace('h-screen', 'h-0');
        MENU_COLLAPSE.classList.remove('z-50');
        MENU_COLLAPSE.classList.add('opacity-0');
    }
}

// Función que abre o cierra el menú de navegación el la versión mobile
function openSearch() {
    if(SEARCH_COLLAPSE.classList.contains("h-0")) {
        SEARCH_COLLAPSE.classList.replace('h-0', 'h-screen');
        SEARCH_COLLAPSE.classList.add('z-50');
        SEARCH_COLLAPSE.classList.remove('opacity-0');
        MENU_COLLAPSE.classList.replace('h-screen', 'h-0');
    } else {
        SEARCH_COLLAPSE.classList.replace('h-screen', 'h-0');
        SEARCH_COLLAPSE.classList.remove('z-50');
        SEARCH_COLLAPSE.classList.add('opacity-0');
    }
}