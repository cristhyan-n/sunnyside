const menuBtn = document.querySelector('[data-menu="button"]')
const menuMobile = document.querySelector('[data-menu="menu"]')

function abrirMenu() {
  menuMobile.classList.toggle('ativo')
}

menuBtn.addEventListener('click', abrirMenu)