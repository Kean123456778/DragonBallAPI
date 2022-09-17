import mostrarInfo from "./mostrarInfo.js";
export function borrado() {
  let content = document.getElementById("content");
  content.innerHTML = "";
}
const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";
export function obtenerTodoslosPersonajes() {
  axios(URL)
    .then((data) => {
      borrado();
      mostrarInfo(data.data);
    })
    .catch((error) => console.log(error));
}
export function obtenerAngeles() {
  axios(URL)
    .then((data) => {
      const array = data.data;
      const angeles = array.filter((personaje) => personaje.specie === "Angel");
      borrado();
      mostrarInfo(angeles);
    })
    .catch((error) => console.log(error));
}
export function obtenerSaiyan() {
  axios(URL).then((data) => {
    const array = data.data;
    const saiyans = array.filter((personaje) => personaje.specie === "Saiyan");
    borrado();
    mostrarInfo(saiyans);
  });
}
export function obtenerFusions() {
  axios(URL).then((data) => {
    const array = data.data;
    const fusions = array.filter((personaje) => personaje.specie === "Fusion");
    borrado();
    mostrarInfo(fusions);
  });
}
export function obtenerHumans() {
  axios(URL).then((data) => {
    const array = data.data;
    const humans = array.filter((personaje) => personaje.specie === "Humano");
    borrado();
    mostrarInfo(humans);
  });
}
export function obtenerNamekians() {
  axios(URL).then((data) => {
    const array = data.data;
    const humans = array.filter(
      (personaje) => personaje.specie === "Namekiano"
    );
    borrado();
    mostrarInfo(humans);
  });
}
export function obtenerMestizos() {
  axios(URL).then((data) => {
    const array = data.data;
    const humans = array.filter(
      (personaje) => personaje.specie === "Saiyan mestizo"
    );
    borrado();
    mostrarInfo(humans);
  });
}
export function obtenerPersonajeAleatorio() {
  axios(URL).then((data) => {
    const array = data.data;
    const numeroAleatorio = Math.floor(Math.random() * array.length);
    const aleatorio = array.filter(
      (personaje) => personaje.id === numeroAleatorio
    );
    borrado();
    mostrarInfo(aleatorio);
  });
}
