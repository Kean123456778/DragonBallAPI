function mostrarInfo(data) {
    let array = data;
    array.forEach((personaje) => {
      console.log(personaje);
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
  export default mostrarInfo;   