import {obtenerTodoslosPersonajes,obtenerAngeles,obtenerSaiyan, obtenerFusions,obtenerHumans,obtenerMestizos,obtenerNamekians,obtenerPersonajeAleatorio,borrado}   from "./geInfo.js";

const contenedorButtoms = document.getElementById("containerButtons");
contenedorButtoms.childNodes.forEach((button) => {
  button.addEventListener("click", (e) => {
    switch (e.target.id) {
      case "btn-todos": obtenerTodoslosPersonajes();
        break;
      case "btn-angeles": obtenerAngeles();
        break;  
      case "btn-saiyan": obtenerSaiyan();
        break;
      case "btn-fusions": obtenerFusions();
        break;
      case "btn-humans": obtenerHumans();
        break;
      case "btn-namekians": obtenerNamekians(); 
        break;  
      case "btn-mestizos": obtenerMestizos(); 
        break;    
      case "btn-aleatorio": obtenerPersonajeAleatorio();  
        break;  
      case "btn-borrar": borrado();
        break;
    }
  });
});