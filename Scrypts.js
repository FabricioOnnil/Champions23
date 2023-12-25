
const readlineSync = require('readline-sync');

// Times participantes
//const times = ["Time1", "Time2", "Time3", "Time4", "Time5", "Time6", "Time7", "Time8", "Time9", "Time10", "Time11", "Time12", "Time13", "Time14", "Time15", "Time16"];
const times = ["Copenhague", "Manchester City", "RB Leipzig", "Real Madrid", "PSG", "Real Sociedad", "Lazio", "Bayern", "PSV", "Borussia", "Internazionale", "Atlético Madrid", "Porto", "Arsenal", "Napoli", "Barcelona"];

// Função para realizar uma rodada da competição
function realizarRodada(times) {
    const vencedores = [];
    for (let i = 0; i < times.length; i += 2) {
        const time1 = times[i];
        const time2 = times[i + 1];
        const vencedor = capturarResultado(time1, time2); // Agora usa capturarResultado para obter o resultado
        vencedores.push(vencedor);
    }
    return vencedores;
}

// Função para capturar o resultado de uma partida
function capturarResultado(time1, time2) {
    console.log(`Resultado da partida entre ${time1} e ${time2}:`);
    const resultado = prompt('Quem venceu? '); // Agora pede ao usuário para inserir o vencedor
    return resultado;
}

// Rodada de oitavas
const oitavas = realizarRodada(times);

// Rodada de quartas
const quartas = realizarRodada(oitavas);

// Rodada de semifinais
const semifinais = realizarRodada(quartas);

// Final
const campeao = realizarRodada(semifinais)[0];

// Exibindo o campeão
console.log("O campeão é: " + campeao);

