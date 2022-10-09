import filtrarPersonajes from "./filterInfo.js";

const URL = "https://dragon-ball-super-api.herokuapp.com/api/characters";

async function getInfo() {
  const res = await fetch(URL);
  const data = await res.json();
  filtrarPersonajes(data);
}
getInfo();
