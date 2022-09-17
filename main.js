import {obtenerTodoslosPersonajes,obtenerAngeles,obtenerSaiyan, obtenerFusions,obtenerHumans,obtenerMestizos,obtenerNamekians,obtenerPersonajeAleatorio,borrado}   from "./geInfo.js";


//Limpiar ventaba
const btnBorrar = document.getElementById("btn-borrar");
  btnBorrar.addEventListener("click", borrado);


const btn = document.getElementById("btn-todos");
btn.addEventListener("click", obtenerTodoslosPersonajes);

const btnAngeles = document.getElementById("btn-angeles");
btnAngeles.addEventListener("click", obtenerAngeles);

const btnSaiyan = document.getElementById("btn-saiyan");
btnSaiyan.addEventListener("click", obtenerSaiyan);

const btnFusions = document.getElementById("btn-fusions");
btnFusions.addEventListener("click", obtenerFusions);

const btnHumans = document.getElementById("btn-humans");
btnHumans.addEventListener("click", obtenerHumans);

const btnnamekians = document.getElementById("btn-namekians");
btnnamekians.addEventListener("click", obtenerNamekians);

const btnmestizos = document.getElementById("btn-mestizos");
btnmestizos.addEventListener("click", obtenerMestizos);

const btnmAleatorio = document.getElementById("btn-aleatorio");
btnmAleatorio.addEventListener("click", obtenerPersonajeAleatorio);