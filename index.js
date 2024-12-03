

const btnDark = document.querySelector('.btn-dark');
const body = document.querySelector('body');
const tarjeta = document.querySelector('.tarjeta');


function activarModoDark(){
    tarjeta.classList.toggle('modo-dark-tarjeta');
    body.classList.toggle('modo-dark-body');
}



btnDark.addEventListener('click', activarModoDark);