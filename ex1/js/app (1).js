const container = document.getElementById('container');

const url = "https://jsonplaceholder.typicode.com/posts";
const commentsUrl = "https://jsonplaceholder.typicode.com/comments?postId=1";

async function getPosts() {
    // get -> fetch
    const resp = await fetch(url);
    const data = await resp.json();

    console.log(data[2]);
    data.map((post) => {
        const divCard = document.createElement("div");
        divCard.classList.add("card");

        const title = document.createElement("h1");
        title.innerText = post.title;

        const body = document.createElement("p");
        body.innerText = post.body;

        const link = document.createElement("a");
        link.innerText = "Ler mais...";
        link.setAttribute("href", "comments.html");

        divCard.appendChild(title);
        divCard.appendChild(body);
        divCard.appendChild(link);

        container.appendChild(divCard);
    });
}

// COMENTARIOS
// async function getComments() {
//     // get -> fetch
//     const resp = await fetch(commentsUrl);
//     const data = await resp.json();

//     console.log(data[2]);

//     data.map((comment) => {
//         const divComment = document.createElement("div");
//         divComment.classList.add("cardComments");

//         const name = document.createElement("h3");
//         name.innerText = comment.name;

//         const body = document.createElement("p");
//         body.innerText = comment.body;
        
//         const link = document.createElement("a");
//         link.innerText = "Voltar";
//         link.setAttribute("href", "index.html");

//         divComment.appendChild(link);
//         divComment.appendChild(name);
//         divComment.appendChild(body);

//         container.appendChild(divComment);
//     });
// }

// CHAMAR AS FUNÇÕES SE N N FUNCIONA
getPosts();
