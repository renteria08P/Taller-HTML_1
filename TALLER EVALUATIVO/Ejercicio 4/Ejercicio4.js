
function calcularIMC(){

    let estatura = document.getElementById("estatura").value;
    let peso = parseFloat(document.getElementById("peso").value);
    let IMC  = peso / (estatura * estatura);

      if (IMC <= 18.5) {
        alert("Bajo Peso");

      } else if (IMC <= 18.5 && IMC >= 24.9) {
        alert("Peso Normal");

      } else if (IMC <= 25 && IMC >= 29.9) {
        alert("Sobrepeso");

      } else if (IMC >= 30) {
        alert("Obesidad");
      }
    document.getElementById("resultado").textContent = "Su Indice Corporal es: " + IMC.toFixed(2) + " kg/m";
}

calcularIMC();