 const usuarios = {
    usuario: "juan",
    password: "1234"
 }
const formAIls = (acc, value) => {
    localStorage.setItem( acc,JSON.stringify(value))
}


const formulario = document.querySelector("form")

const user = document.querySelector(".user")
const pass = document.querySelector(".pass")


formulario.onsubmit = (form) => {
    form.preventDefault()
    if ( user.value === usuarios.usuario && pass.value === usuarios.password){
        formAIls("login", true)
    }
}

