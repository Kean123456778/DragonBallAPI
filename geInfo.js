import mostrarInfo from "./mostrarInfo.js";

export function borrado() {
  let content = document.getElementById("content");
  content.innerHTML = "";
}

const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";
export function obtenerTodoslosPersonajes() {
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      borrado();
      mostrarInfo(data);
    })
    .catch((error) => console.log(error));
}

export function obtenerAngeles() {
  fetch(URL)
    .then((response) => response.json())
    .then((array) => {
      const angeles = array.filter((personaje) => personaje.specie === "Angel");
      borrado();
      mostrarInfo(angeles);
    })
    .catch((error) => console.log(error));
}

export function obtenerSaiyan() {
  fetch(URL)
    .then((response) => response.json())
    .then((array) => {
      const saiyans = array.filter(
        (personaje) => personaje.specie === "Saiyan"
      );
      borrado();
      mostrarInfo(saiyans);
    });
}
export function obtenerFusions() {
  fetch(URL)
    .then((response) => response.json())
    .then((array) => {
      const fusions = array.filter(
        (personaje) => personaje.specie === "Fusion"
      );
      borrado();
      mostrarInfo(fusions);
    });
}

export function obtenerHumans() {
  fetch(URL)
    .then((response) => response.json())
    .then((array) => {
      const humans = array.filter((personaje) => personaje.specie === "Humano");
      borrado();
      mostrarInfo(humans);
    });
}
export function obtenerNamekians() {
  fetch(URL)
    .then((response) => response.json())
    .then((array) => {
      const humans = array.filter(
        (personaje) => personaje.specie === "Namekiano"
      );
      borrado();
      mostrarInfo(humans);
    });
}
export function obtenerMestizos() {
  fetch(URL)
    .then((response) => response.json())
    .then((array) => {
      const humans = array.filter(
        (personaje) => personaje.specie === "Saiyan mestizo"
      );
      borrado();
      mostrarInfo(humans);
    });
}

export function obtenerPersonajeAleatorio() {
  fetch(URL)
    .then((response) => response.json())
    .then((array) => {
      const numeroAleatorio = Math.floor(Math.random() * array.length);
      const aleatorio = array.filter(
        (personaje) => personaje.id === numeroAleatorio
      );
      borrado();
      mostrarInfo(aleatorio);
    });
}
