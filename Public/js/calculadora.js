let currentInput = '';
let signo = '';
let previousInput = '';

function agregarNumero(number) {
    currentInput += number;
    document.getElementById('resultado').value = currentInput;
}

function Operador(op) {
    if (currentInput === '') return;
    signo = op;
    previousInput = currentInput;
    currentInput = '';
    document.getElementById('resultado').value = signo;
    setTimeout(() => {
        document.getElementById('resultado').value = '';
    }, 1000);
}

function calcular() {
    let result;
    const num1 = parseFloat(previousInput);
    const num2 = parseFloat(currentInput);

    if (signo === '+') {
        result = num1 + num2;
    } else {
        if (signo === '-') {
            result = num1 - num2;
        } else {
            if (signo === '*') {
                result = num1 * num2;
            } else {
                if (signo === '/') {
                    if (num2 === 0) {
                        alert("Error: Division no permitida.");
                        clearDisplay();
                        return;
                    }
                    result = num1 / num2;
                } else {
                    return;
                }
            }
        }
    }

    document.getElementById('resultado').value = result;
    currentInput = result.toString();
    operato = '';
    previousInput = '';
}

function limpiar() {
    currentInput = '';
    previousInput = '';
    signo = '';
    document.getElementById('resultado').value = '';
}

