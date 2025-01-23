function mudarLuz(cor) {
    document.getElementById("verde").style.backgroundColor = "#555"
    document.getElementById("amarelo").style.backgroundColor = "#555"
    document.getElementById("vermelho").style.backgroundColor = "#555"
    
    if (cor === "verde"){
        document.getElementById("verde").style.backgroundColor = "green"
    } else if (cor === "amarelo") {
        document.getElementById("amarelo").style.backgroundColor = "yellow"
    } else if (cor === "vermelho") {
        document.getElementById("vermelho").style.backgroundColor = "red"
    }
}

let tempo = 3;
let sinal = 'verde';
let interval;
const timerElement = document.getElementById('timer');

function timer() {
    mudarLuz(sinal)
    clearInterval(interval);
    timerElement.textContent = tempo;

    interval = setInterval(() => {
        tempo--; 
        timerElement.textContent = tempo;
        if (tempo === 0) {
            tempo = 3;
            if (sinal === 'verde') {
                sinal = 'amarelo'
            } else if (sinal === 'amarelo') {
                sinal = 'vermelho'
            } else if (sinal === 'vermelho') {
                sinal = 'verde'
            }
            mudarLuz(sinal)
        }
    }, 1000);
}

function stop() {
    clearInterval(interval);
}