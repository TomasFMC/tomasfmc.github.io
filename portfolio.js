


window.onscroll = function(){
    if(document.documentElement.scrollTop > 100){
        document.getElementById('subir').style.visibility = 'visible';
    }
    else{
        document.getElementById('subir').style.visibility = 'hidden';
    }
}

document.getElementById('botonSubir').addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


let modo = 'nocturno';

document.getElementById('modoDiaNoche').onclick = function() {

        document.body.classList.toggle('modo-diurno-body');

        const navegacion = document.getElementsByClassName('navegacion');
        for (let i = 0; i < navegacion.length; i++){
            navegacion[i].classList.toggle("modo-diurno-navegacion");
        }

        const contenedores = document.getElementsByClassName("contenedor");
        for (let i = 0; i < contenedores.length; i++) {
            contenedores[i].classList.toggle("modo-diurno-contenedor");
        }

        const botones = document.getElementsByClassName("boton");
        for (let i = 0; i < botones.length; i++) {
         botones[i].classList.toggle("modo-diurno-boton");
        }
        
        if (modo == 'diurno'){
            document.getElementById('modoDiaNoche').src = "imagenes/modonocturno.png";
            modo = 'nocturno';
        }
        else{
            document.getElementById('modoDiaNoche').src = "imagenes/mododiurno.png";
            modo = 'diurno';
        }
  }