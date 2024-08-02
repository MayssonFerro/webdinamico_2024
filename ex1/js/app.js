const container = document.getElementById('container');

// const meuH1 = document.createElement('h1');
// meuH1.innerText = "Criando um elemento";

// const meuH2 = document.createElement('h2');
// meuH2.innerText = "Criando um elemento H2!";

// const novaDiv = document.createElement('div');
// novaDiv.appendChild(meuH2);

// container.appendChild(meuH1);

// container.appendChild(novaDiv);


const url = "https://jsonplaceholder.typicode.com/posts";

async function getPosts(){

    // get -> fetch
    const resp = await fetch(url);

    const data = await resp.json();

    console.log(data[2]);
    data.map((post) => {
        const divCard = document.createElement("div")
        divCard.classList.add("card")

        const title = document.createElement("h1")
        title.innerText = post.title

        const body = document.createElement("p")
        body.innerText = post.body

        const link = document.createElement("a")
        link.innerText = "Ler mais..."
        link.setAttribute("href", "#")

        divCard.appendChild(title)
        divCard.appendChild(body)
        divCard.appendChild(link)

        container.appendChild(divCard)
    })
}

getPosts()