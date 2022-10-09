export default function showInfo(array) {
  const containerApp = document.getElementById("container-app");
  array.forEach((personaje) => {
    const div = document.createElement("div");
    div.classList.add("personaje");
    const imgUrl = personaje.imageUrl;
    const nombre = personaje.name;
    const specie = personaje.specie;
    const universe = personaje.universe;
    div.innerHTML = `
        <p>El Personaje es <strong>${nombre}</strong> y su especie es <strong>${specie}</strong> del universo <strong>${universe}</strong></p>
        <img class="img-personaje" src="${imgUrl}" alt="${nombre}" />
        `;
    containerApp.append(div);
  });
}





