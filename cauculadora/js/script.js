let expressao = "";

// Função para adicionar números ao display
function adicionarNumero(numero) {
    expressao += numero; // Adiciona o número ao final da expressão
    document.getElementById("display").value = expressao; // Atualiza o display
}

// Função para adicionar operadores (+, -, *, /) ao display
function adicionarOperacao(operacao) {
    expressao += ` ${operacao} `; // Adiciona o operador à expressão
    document.getElementById("display").value = expressao; // Atualiza o display
}

// Função para calcular o resultado da expressão
function calcularResultado() {
    try {
        // Usa a função eval para calcular a expressão
        let resultado = eval(expressao);
        
        // Verifica se o resultado é um valor numérico e não uma operação inválida
        if (resultado === Infinity || resultado === -Infinity) {
            throw new Error("Divisão por zero");
        }

        // Atualiza o display com o resultado
        document.getElementById("display").value = resultado;
        expressao = resultado.toString(); // Atualiza a expressão para o resultado
    } catch (erro) {
        // Caso haja um erro, exibe "Erro" no display
        document.getElementById("display").value = "Erro";
        expressao = ""; // Limpa a expressão para evitar erros consecutivos
    }
}

// Função para limpar o display
function limparDisplay() {
    expressao = ""; // Reseta a expressão
    document.getElementById("display").value = ""; // Limpa o display
}

// Função para apagar o último caractere (backspace)
function apagarUltimo() {
    expressao = expressao.slice(0, -1); // Remove o último caractere
    document.getElementById("display").value = expressao; // Atualiza o display
}
