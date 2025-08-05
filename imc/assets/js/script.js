
function calcular() {
let peso = document.getElementById('peso').value;
let altura = document.getElementById('altura').value;

if (peso === '' || altura === '') {
    alert('Preencha todos os campos')
}


let pesoN = parseFloat(peso);
let alturaN = parseFloat(altura);

if (isNaN(pesoN) || isNaN(alturaN) || alturaN === 0) {
    document.getElementById('resultado').innerHTML = 'Seu IMC é: 0.00';
    return;
}

let IMC = pesoN / Math.pow(alturaN,2);
console.log(IMC)

let resultado = '';

if (IMC < 18.5) {
    resultado = 'Magreza'
} else if (IMC >= 18.5 && IMC <= 24.9) {
    resultado = 'Normal'
} else if (IMC >= 25 && IMC <= 29.9) {
    resultado = 'Sobrepeso'
} else if (IMC >= 30 && IMC <= 39.9) {
    resultado = 'Obesidade'
} else {
    resultado = 'Obesidade Grave'
}


    document.getElementById('resultado').innerHTML = `Seu IMC é: ${IMC.toFixed(2)} <br> ${resultado}`
}

let pesoInput = document.getElementById('peso');

pesoInput.addEventListener('input', function() {
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }
});

let alturaInput = document.getElementById('altura');

alturaInput.addEventListener('input', function() {
    if (this.value.length > 3) {
        this.value = this.value.slice(0, 3);
    }
});
