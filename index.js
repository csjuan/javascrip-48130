
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

//let intentos = 1
//let validar = true 
//do {
//  let usuario = prompt("ingrese usuario:")
 //     if ( usuario === "juan" && intentos <= 5){
//        alert( "bienvenido " , usuario)
//        console.log("bienvenido")
//        break 
//      }
//      else {
//        alert(" usuario "  + usuario +  " no registrado intenta otra vez ")
//       intentos++
 //      if (intentos > 5) {
//        alert("ya no tienes mas intentos")
//        break
//      }
//      }

//}while(validar)

//####################################################################################################################################################################//

console.log(herramientas)

class herramienta {
   constructor (id,producto,precio,peso,categoria,oferta) {
      this.id = id
      this.producto = producto
      this.precio = precio 
      this.peso = peso
      this.categoria = categoria 
      this.oferta = oferta 
   }
}

const herramienta20 = new herramienta ( 20,"pistola de silicona",1345,"0.430 kg", " oulet",true)
const herramienta21 = new herramienta ( 21,"martillo antirebote",6545,"1.300 kg", " oulet",true,)
const herramienta22 = new herramienta ( 22,"arco de sierra 300mm",5310,"0.230 kg", " oulet",true)
const herramienta23 = new herramienta ( 23,"cortadora de ceramica",21345,"2.430 kg", "oulet",true)

herramientas.push(herramienta20)
herramientas.push(herramienta21)
herramientas.push(herramienta22)
herramientas.push(herramienta23)



console.table(herramientas)

const copiaHerramientas = herramientas.map( (her) =>{
   return her
})
console.log(copiaHerramientas)


herramientas.forEach ( (buscaOferta)  =>{
   if (buscaOferta.oferta === true)
   console.log(buscaOferta.precio *0.90)
})


const herramientasOulet = herramientas.filter( (ofer)  => {
   return ofer.oferta == true

})
console.log (herramientasOulet)



const herramientaDeMano = herramientasOulet.find ( (herr) => {
   return herr.precio >= 23000

}
)
console.log(herramientaDeMano)

let  ofertas = confirm("desea ver nuestras ofertas")
     if (ofertas === true){
      herramientas.filter ( (produc) => {
         if (produc.oferta === true ){
            console.log(produc)
         }
      })
     }












