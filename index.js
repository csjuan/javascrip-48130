
//function validarIngreso () {
 //   let usuario = prompt( "ingrese su nombre de usuario:" )
 //   let pass = prompt("ingrese contraseña")
 //       if (usuario === "juan" ) {
 //          alert( "bienvenido juan")
 //          console.log("usuario registrado")
  //      } else {
  //       alert( "el usuario " + usuario + " no exsiste, debe registrarse")      
   //     }
  
//}
 //validarIngreso ()

let intentos = 1
let validar = true 
do {
  let usuario = prompt("ingrese usuario:")
      if ( usuario === "juan" && intentos <= 5){
        alert( "bienvenido " , usuario)
        console.log("bienvenido")
        break 
      }
      else {
        alert(" usuario "  + usuario +  " no registrado intenta otra vez ")
       intentos++
       if (intentos > 5) {
        alert("ya no tienes mas intentos")
        break
      }
      }

}while(validar)

