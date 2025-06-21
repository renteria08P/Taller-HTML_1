 function iniciarSesion() {
    
      let user = "admin";
      let password = "1234";

      let n = document.getElementById("user").value;
      let m = document.getElementById("password").value;

      if (n === user && m === password) {
        alert("¡Bienvenido, admin!");
      } else {
        alert("Usuario o contraseña incorrectos");
      }
    }