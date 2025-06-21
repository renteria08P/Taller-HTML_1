function calcularCO2() {
    
  let transporte = document.getElementById("selection").value;
  let kilo = document.getElementById("kilo").value;
  let resultado = 0;

  switch (transporte) {
    case "Carro":
      resultado = 0.21 * kilo;
      break;
    case "Moto":
      resultado = 0.11 * kilo;
      break;
    case "Bus":
      resultado = 0.07 * kilo;
      break;
    default:
      resultado = 0;
      break;
  }

  document.getElementById("resultado").textContent = 
    "CO₂ emitido: " + resultado.toFixed(2) + " kg";
}

