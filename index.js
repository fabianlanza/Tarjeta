

const btnDark = document.querySelector('.btn-dark');
const body = document.querySelector('body');
const tarjeta = document.querySelector('.tarjeta');

const estadoDark = localStorage.getItem('dark-mode');

function activarModoDark(){
    tarjeta.classList.add('modo-dark-tarjeta');
    body.classList.add('modo-dark-body');
    localStorage.setItem('dark-mode', 'activado');
}

function desactivarModoDark(){
    tarjeta.classList.remove('modo-dark-tarjeta');
    body.classList.remove('modo-dark-body');
    localStorage.setItem('dark-mode', 'desactivado');
}


// Verificar si el modo dark esta activado al entrar a la pagina
if(estadoDark === "activado"){
    activarModoDark();
    btnDark.textContent="Light";
}
else{
    desactivarModoDark();
    btnDark.textContent="Dark";
}




btnDark.addEventListener('click', () => {

    const estadoDark = localStorage.getItem("dark-mode");
    if(estadoDark==="desactivado"){
        activarModoDark();
        btnDark.textContent="Light";
    }
    else{
        desactivarModoDark();
        btnDark.textContent="Dark";
    }
});

