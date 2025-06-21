 function clasificarEdad() {
      let edad = parseInt(document.getElementById("edad").value);

      if (edad >= 0 && edad <= 12) {
        alert("Niño");
      } else if (edad >= 13 && edad <= 17) {
        alert("Adolescente");
      } else if (edad >= 18 && edad <= 59) {
        alert("Adulto");
      } else if (edad >= 60) {
        alert("Adulto Mayor");
      } else {
        alert("Edad no válida");
      }
    }