//agregar un evento click al botón
const boton = document.getElementById('btn');
boton.addEventListener('click', () => {

    //acá guardo el comentario ingresado por el usuario
    let comments = document.getElementById("comment").value;

    //contenedor donde dejaré mis comentarios en html
    const cont = document.getElementById("cont");

    //crear un div contenedor
    const newComments = document.createElement("div");

    //texto vacío = deshabilitar botón
    if(comments.length == 0 || comments == null) {
        boton.disabled = true;
        return false;
    }

    //nodo de texto del textarea
    let textNewComment = document.createTextNode(comments);

    const contenedorElemento = document.createElement('p');
    contenedorElemento.appendChild(textNewComment);
    newComments.appendChild(contenedorElemento);
    cont.appendChild(newComments);
})

