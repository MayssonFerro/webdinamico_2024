const container = document.getElementById('container');

const url = "https://jsonplaceholder.typicode.com/posts";
const commentsUrl = "https://jsonplaceholder.typicode.com/comments?postId=1";
//commentsUrl precisava de /comments?postId=1 por algum motivo desconehcido atualmente

async function getComments() {
    // get -> fetch
    const resp = await fetch(commentsUrl);
    const data = await resp.json();

    // console.log(data[2]);

    data.map((comment) => {
        const divComment = document.createElement("div");
        divComment.classList.add("cardComments");

        const name = document.createElement("h3");
        name.innerText = comment.name;

        const email = document.createElement("h3");
        email.innerText = comment.email;

        const body = document.createElement("p");
        body.innerText = comment.body;
        
        const link = document.createElement("a");
        link.innerText = "Voltar";
        link.setAttribute("href", "index.html");

       
        divComment.appendChild(name);
        divComment.appendChild(email);
        divComment.appendChild(body);
        divComment.appendChild(link);

        container.appendChild(divComment);
    });
}

// CHAMANDO OS COMENTARIOS
getComments();