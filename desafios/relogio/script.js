const horas = document.getElementById('horas')
const minutos = document.getElementById('minutos')
const segundos = document.getElementById('segundos')

const tHora = document.getElementById('tempoh')
const tMinuto = document.getElementById('tempom')
const tSegundo = document.getElementById('tempos')

function time() {

    const date = new Date();

    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();

    if (hours < 10){
        hours = '0' + hours;
    }

    if (minutes < 10){
        minutes = '0' + minutes;
    }

    if (seconds < 10){
        seconds = '0' + seconds;
    }

    horas.textContent = hours;
    minutos.textContent = minutes;
    segundos.textContent = seconds;

    if(hours == 1){
        tHora.textContent = 'Hora';
    } else {
        tHora.textContent = 'Horas';
    }

    if(minutes == 1){
        tMinuto.textContent = 'Minuto';
    } else {
        tMinuto.textContent = 'Minutos';
    }

    if(seconds == 1){
        tSegundo.textContent = 'Segundo';
    } else {
        tSegundo.textContent = 'Segundos';
    }


};

setInterval(time, 1000);