// function ChangeColor() {
//     let h2 = document.querySelector("h2");
//     // h2.style.color = "red";
//     h2.classList.add("red")
//     h2.classList.remove("blue")
// }

function show() {
    let div = document.querySelector("div");
    div.classList.add("big");
    div.classList.remove("small");
    let button = document.getElementById("btn");
    button.innerHTML = "show less";
}