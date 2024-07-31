// // VAR
// const a = 1; // constante
// let b = 2 // variavel
// var c = 3; // legado
// d = 4;

// // estrutura condicional
// if ( a > b) {
//     // caso vdd o teste
// } else {
//     // caso falso o teste
// }


// apresentação dos resultados
let a = 123
console.log(a)
// alert(a)


// manipulação da DOM
let c = document.getElementById("container");
let d = document.getElementsByClassName("menu");
let e = document.getElementsByTagName("h3");
let f = document.querySelector("#container");
console.log(c);

console.log(d);

console.log(e);

// estrutura de repetição
for (let i = 0; i < 10; i++) {
    console.log(i);
}

let j = 0;
while(j < 10) {
    console.log(j);
    j++;
}

let h = 10;
do {
    console.log(h);
    h++;
} while(h < 10);

//funções
function soma(a, b){
    console.log(a + b);
    //ou
    //return a + b
}

soma(6, 6);

let soma2 = new Function("b", "h", "return (b+h)/2");

//objetos
let pessoa = {
    nome: "João",
    idade: 20,
    sexo: "M",
};

// console.log(pessoa.nome);

function dizerOi(){
    let nome = document.getElementById("nome").value;

    if(nome.length == 0){
        let error = document.getElementById("error")
        error.classList.add("error");
        error.innerHTML = "<b>O nome não pode ser vazio!</b>";
    } else {
        error.classList.add("right");
        error.innerHTML = "<b>`Olá ${nome}`</b>";
    }
}