import handlerButtons from "./handlerButtons.js";
import showInfo from "./showInfo.js";

export default function filtrarPersonajes(array) {
  const borrado = () => {
    const containerApp = document.getElementById("container-app");
    containerApp.innerHTML = "";
  };
  const filtrar = (busq) => {
    return array.filter((personaje) => personaje.specie === busq);
  };

  const todos = () => {
    const todos = array;
    borrado();
    showInfo(todos);
  };
  const angeles = () => {
    const angels = filtrar("Angel");
    borrado();
    showInfo(angels);
  };
  const saiyans = () => {
    const saiyans = filtrar("Saiyan");
    borrado();
    showInfo(saiyans);
  };
  const fusions = () => {
    const fusions = filtrar("Fusion");
    borrado();
    showInfo(fusions);
  };
  const humans = () => {
    const humans = filtrar("Humano");
    borrado();
    showInfo(humans);
  };
  const namekians = () => {
    const namekians = filtrar("Namekiano");
    borrado();
    showInfo(namekians);
  };
  const mestizos = () => {
    const mestizos = filtrar("Saiyan mestizo");
    borrado();
    showInfo(mestizos);
  };
  const aleatorios = () => {
    const NumAleatorio = Math.floor(Math.random() * array.length);
    const personajeAleatorio = array.filter(
      (personaje) => personaje.id === NumAleatorio
    );
    borrado();
    showInfo(personajeAleatorio);
  };

  const containerButtons = document.getElementById("container-buttons");
  containerButtons.addEventListener("click", (e) => {
    handlerButtons(
      e,
      todos,
      angeles,
      saiyans,
      fusions,
      humans,
      namekians,
      mestizos,
      aleatorios,
      borrado
    );
  });
}
