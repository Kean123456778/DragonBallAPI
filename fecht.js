function borrado() {
  let content = document.getElementById("content");
  content.innerHTML = "";
}

function obtenerDatos() {
  fetch("https://dragon-ball-super-api.herokuapp.com/api/characters")
    .then((response) => response.json())
    .then(data => mostrarINfo(data))
    .catch((error) => console.log(error ));
}

const btn = document.getElementById("btn-todos");
btn.addEventListener("click", obtenerDatos);
const btnBorrar = document.getElementById("btn-borrar");
btnBorrar.addEventListener("click", borrado);

function mostrarINfo(data) {
  let array = data;
  console.log(array[0]);
  array.forEach((personaje) => {
    let Personaje = personaje.name;
    let specie = personaje.specie;
    let imgSrc = personaje.imageUrl;
    let content = document.getElementById("content");
    let div = document.createElement("div");
    div.className = "personaje";
    div.innerHTML = `<p> El personaje es <strong>${Personaje}</strong> y su especie es <strong>${specie}</strong></p>
        <img class="img-personaje" src=${imgSrc} >`;
    content.appendChild(div);
  });
}
