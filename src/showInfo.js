export default function showInfo(array) {
  const containerApp = document.getElementById("container-app");


    array.forEach((personaje) => {
        const div = document.createElement("div");
        const imgUrl = personaje.imageUrl;
        const nombre = personaje.name;
        const specie = personaje.specie;
        const universe = personaje.universe;
        div.innerHTML = `
        
        <p>El Personaje es ${nombre} y su especie es ${specie} del universo ${universe}</p>
        <img src="${imgUrl}" alt="${nombre}" />
        
        `;
        containerApp.append(div);
      });
  
}