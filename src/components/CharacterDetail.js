import { characters } from "./mock_db.js";

const container = document.querySelector("#characterContainer");
// el querystring es lo que esta despues de ? en la url
const querystring = window.location.search;
const params = new URLSearchParams(querystring);
const id = params.get("id");

let character;
for (let i = 0; i < characters.length; i++) {
  // console.log("loop #", i);
  if (characters[i]._id == id) {
    character = characters[i];
    // break hace que se termine el for, se usa dentro de
    // una condicion, para no ejecutar vueltas innecesarias
    break;
  }
}

let characterDetail = `
<div>
<h1 class="titulo">${character.name}</h1>
</div>
<div class="container-personaje">
  <div class="imagen-personaje"><img src="${character.image}" alt"Imagen del personaje"></div>
  <div>
    <h1>Creacion: ${character.creationYear}</h1>
    <h1 class="nombre-real-personaje">Nomre real: ${character.realName}</h1>
    <div class="descripcion-personaje">${character.info}</div>
  </div>
</div>
<div>
  
</div>
`;

//TODO: hacer maquetado usando el objeto obtenido del for

container.innerHTML = characterDetail;
