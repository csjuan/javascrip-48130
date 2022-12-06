

function validarIngreso () {
    let usuario = prompt( "ingrese su nombre de usuario:" )
    let pass = prompt("ingrese contraseña")
        if (usuario === "juan" ) {
           alert( "bienvenido juan")
           console.log("usuario registrado")
        }    
       else {
            alert( "el usuario " + usuario + "no puede exsiste, debe registrarse")      
   }
}
 validarIngreso ()

