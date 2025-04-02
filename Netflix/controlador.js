let inputNombre=document.getElementById("nombre")
let inputContraseña=document.getElementById("contraseña")
let inputCorreo=document.getElementById("correo")
let boton=document.getElementById("boton")

boton.addEventListener("click", function(evento){
    evento.preventDefault()
    let nombre=inputNombre.value
    let contraseña=inputContraseña.value
    let correo=inputCorreo.value
    let nombreBaseDatos="emely"
    let contraseñaBaseDatos="123456"
    let correoBaseDatos="emely@gmail.com"

    if(nombre==nombreBaseDatos && contraseña==contraseñaBaseDatos && correo==correoBaseDatos){
        Swal.fire({
            title: "Buen trabajo!",
            text: "Bienvenido " +nombre,
            icon: "success"
          });
    //Usando las cookies (hacker)
          localStorage.setItem("nombre",nombre)
          localStorage.setItem("contraseña",contraseña)
          window.location.href=("./index2.html")
    }else{
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: nombre+ " Revisa tus datos, por favor",
            
          });
    }
})