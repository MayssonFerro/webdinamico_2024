let open = document.querySelector('article')
let mask = document.querySelector('.mask')
let btn = document.querySelector('button')

function show() {
    open.classList.toggle('open')
    if(open.classList.contains('open')) {
        mask.classList.remove('mask')
        btn.innerHTML = "Mostrar menos";
    } else {
        btn.innerHTML = 'Mostrar mais'
        mask.classList.add('mask')
    }
}