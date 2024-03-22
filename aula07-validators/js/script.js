function validar() {
    const nome = document.getElementById("name")
    const error = document.getElementsByClassName("error")
    const arroba = "@"
    const ponto = "."

    console.log(nome.value.length);
        if(nome.value.length == 0) {
            error[0].innerHTML = "O nome não pode ser vazio!"
        } else {
            error[0].innerHTML = ""
        }
}

function validarEmail() {
    console.log(nome.value)
    if (nome.value.indeOf("0"))
}