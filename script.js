// Função para verificar se um número pertence à sequência de Fibonacci
function verificaFibonacci(n) {
    let a = 0, b = 1, c; // variáveis
 // Verifica se o número é 0 ou 1...
    if (n === a || n === b) return true;

    // Gera a sequência de Fibonacci até encontrar um número maior que n, verdadeiro ou falso
    while (true) {
        c = a + b;
        if (c === n) return true; // O número pertence à sequência de Fibonacci, verdadeiro.
        if (c > n) return false; // O número não pertence à sequência de Fibonacci, falso.
        a = b;
        b = c;
    }
}
// Função para testar a função verificaFibonacci, os numeros já previamente definidos
function testarVerificaFibonacci() {
    const numeros = [0, 1, 2, 4, 5, 8, 13, 21, 34, 52, 89, 144, 146, 149];
    numeros.forEach(num => {
        console.log(num + " pertence à sequência de Fibonacci? " + verificaFibonacci(num));
    });
}

testarVerificaFibonacci(); // Testa a função verificaFibonacci com alguns números
