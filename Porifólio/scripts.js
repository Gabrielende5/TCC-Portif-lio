
let header = document.getElementById('header')
window.addEventListener('scroll', () => {
    if(window.scrollY >= 200){
        header.style.background = '#191919'
    } else {
        header.style.background = 'transparent'
    }
})
// Ele faz com em um momento o "header", no momento que mover o scroll do mouse, pare de ficar transparente 
