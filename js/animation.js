function luzVerde(){//Enciende la luz verde// A partir del segundo ciclo, apaga las luces amarilla y roja
    document.getElementById("luzAmarilla").classList.remove("show_luzAmarilla");//Apaga luz amarilla
    document.getElementById("luzRoja").classList.remove("show_luzRoja");//Apaga luz roja
    document.getElementById("luzVerde").classList.toggle("show_luzVerde");//Enciende luz verde
    setTimeout(luzAmarilla, 10000);//Cambia en 10 segundos
}

function luzAmarilla(){//Enciende luz amarilla
    document.getElementById("start").classList.toggle("start");//Esconde el boton Start
    document.getElementById("luzVerde").classList.remove("show_luzVerde");//Apaga luz verde
    document.getElementById("luzAmarilla").classList.toggle("show_luzAmarilla");//Enciende luz amarilla
    setTimeout(luzRoja, 2000);//Cambia en 2 segundos
}

function luzRoja(){//Enciende luz roja
    document.getElementById("start").classList.toggle("start");//Esconde el boton Start
    document.getElementById("luzAmarilla").classList.remove("show_luzAmarilla");//Apaga luz amarilla
    document.getElementById("luzRoja").classList.toggle("show_luzRoja");//Enciende luz roja
    setTimeout(luzAmarillaRoja, 9000);//Cambia en 8 segundos
}

function luzAmarillaRoja(){//Enciende luz amarilla y roja
    document.getElementById("start").classList.toggle("start");//Esconde el boton Start
    document.getElementById("luzRoja").classList.remove("show_luzRoja");//Apaga luz roja
    document.getElementById("luzAmarilla").classList.toggle("show_luzAmarilla");//Enciende luz amarilla
    document.getElementById("luzRoja").classList.toggle("show_luzRoja");//Enciende luz roja debajo de la amarilla como es el orden del semaforo
    setTimeout(luzVerde, 1000);//cambia en 1 segundos
}

function recargar(){//Reinicia la pagina deteniendo el ciclo al pulsar Stop
    location.reload();
}

//Nuevo comentario de prueba
