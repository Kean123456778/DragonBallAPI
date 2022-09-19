import showInfo from "./showInfo.js";

export default function filtrarPersonajes(array) {
  function borrado() {
    const containerApp = document.getElementById("container-app");
    containerApp.innerHTML = "";
  }

  const todos = () => {
    const todos = array;
    borrado();
    showInfo(todos);
  };
  const angeles = () => {
    const angels = array.filter(personaje => personaje.specie === "Angel");
    borrado();
    showInfo(angels);
  };
  const saiyans = () => {
    const saiyans = array.filter(personaje => personaje.specie === "Saiyan");
    borrado();
    showInfo(saiyans);
  };
  const fusions = () => {
    const fusions = array.filter(personaje => personaje.specie === "Fusion");
    borrado();
    showInfo(fusions);
  };
  const humans = () => {
    const humans = array.filter(personaje => personaje.specie === "Humano");
    borrado();
    showInfo(humans);
  };
  const namekians = () => {
    const namekians = array.filter(personaje => personaje.specie === "Namekiano"   );
    borrado();
    showInfo(namekians);
  };
  const mestizos = () => {
    const mestizos = array.filter(personaje => personaje.specie === "Saiyan mestizo");
    borrado();
    showInfo(mestizos);
  };
  const aleatorios = () => {
    const NumAleatorio = Math.floor(Math.random() * array.length);
    const personajeAleatorio = array.filter(personaje => personaje.id === NumAleatorio);
    borrado();
    showInfo(personajeAleatorio);
  };

  const containerButtons = document.getElementById("container-buttons");
  containerButtons.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "btn-todos":
        todos();
        break;
      case "btn-angeles":
        angeles();
        break;
      case "btn-saiyans":
        saiyans();
        break;
      case "btn-fusions":
        fusions();
        break;
      case "btn-humans":
        humans();
        break;
      case "btn-namekians":
        namekians();
        break;
      case "btn-mestizos":
        mestizos();
        break;
      case "btn-aleatorio":
        aleatorios();
        break;
      case "btn-borrar":
        borrado();
        break;
    }
  });
}
