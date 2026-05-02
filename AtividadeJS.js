function calcularIMC() {

    let valorPeso = document.getElementById("peso").value;
    let valorAltura = document.getElementById("altura").value;

    let calculo = valorPeso / (valorAltura * valorAltura)

    document.getElementById("resultado").textContent = "Resultado: " + calculo.toFixed(2);

    let classificacao = "";

    if (calculo < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (calculo >= 18.5 && calculo < 25) {
        classificacao = "Peso normal"
    } else if (calculo > 25 && calculo < 30) {
        classificacao = "Sobre peso"
    } else {
        classificacao = "Obesidade"
    }

    document.getElementById("classificacao").textContent = "Classificação: " + classificacao;
}