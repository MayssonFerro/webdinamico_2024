function validar() {
    const nome = document.getElementById("name")
    const error = document.getElementsByClassName("error")

    console.log(nome.value.length);
        if(nome.value.length == 0) {
            error[0].innerHTML = "O nome não pode ser vazio!"
        } else {
            error[0].innerHTML = ""
        }
}