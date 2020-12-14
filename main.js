const correo                    = document.getElementById("correo")
const password                  = document.getElementById("password")
const crearCuenta               = document.getElementById("crearCuenta")
const mensaje                   = document.getElementById("mensaje")




crearCuenta.addEventListener("click", () => {
    mensaje.innerHTML=correo.value
 })