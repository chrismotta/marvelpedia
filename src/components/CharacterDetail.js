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
<h1>Nombre: ${character.name}</h1>
<h1>Creacion: ${character.creationYear}</h1>
`;

//TODO: hacer maquetado usando el objeto obtenido del for

container.innerHTML = characterDetail;
