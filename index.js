const readline = require('readline');

// Criação da interface readline
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para calcular saldo de vitórias e nível
function calcularSaldoNivel(vitorias, derrotas) {
    const saldoVitorias = vitorias - derrotas; // Calcula o saldo de vitórias

    // Determina o nível com base nas vitórias
    let nivel;
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias <= 100) {
        nivel = "Diamante";
    } else {
        nivel = "Lendário";
    }

    return { saldoVitorias, nivel }; // Retorna o saldo e o nível
}

// Função para perguntar e obter input do usuário
function perguntar(question) {
    return new Promise((resolve) => {
        rl.question(question, (input) => {
            resolve(parseInt(input)); // Converte a entrada para um número inteiro
        });
    });
}

// Função principal
async function main() {
    const vitorias = await perguntar("Digite a quantidade de vitórias: "); // Pergunta vitórias
    const derrotas = await perguntar("Digite a quantidade de derrotas: "); // Pergunta derrotas

    const resultado = calcularSaldoNivel(vitorias, derrotas); // Calcula saldo e nível

    // Exibe a mensagem final
    console.log(`O herói tem de saldo de ${resultado.saldoVitorias} e está no nível de ${resultado.nivel}`);

    rl.close(); // Fecha a interface readline
}

// Executa o programa
main();