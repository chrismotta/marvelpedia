// import <modulo> from "./file.js"
import { characters } from "./components/mock_db.js";
import Card from "./components/Card.js";

// tarea
// agrear al objeto characters realName y creationYear
// agregarlo al maquetado
// el lugar donde puse la fecha de creacion es muy provicional
// no se por que el parentesis que use en el after aparece como con un espacio
// pude hacerlo con grid area (esta buenisimo y facilita una banda las cosas) peero no pude tirar los comentarios abajo de la imagen y la /// descripcion

let likedCharacters = [];

// const card = "hola " + character.name + ", como estas?";//concat string
// const card = `hola ${character.name}, como estas?`;//template literal
// console.log(card);

// const card = document.createElement("div");
// card.classList.add("card");

function renderCharacters() {
  let cards = "";
  // cada personaje
  for (let i = 0; i < characters.length; i++) {
    let likedClass;
    // si el id esta dentro de likedCharacters el icono va a ser lleno, sino vacio
    if (likedCharacters.includes(characters[i]._id)) {
      likedClass = "fas fa-heart";
    } else {
      likedClass = "far fa-heart";
    }

    cards += Card(characters[i], likedClass);
  }

  const cardContainer = document.querySelector("#cards-container");
  // Añadir elementos estilo string concat (vieja usanza)
  cardContainer.innerHTML = cards;
  // const card2 = card;
  // cardContainer.appendChild(card);
}

// En el 'modo standard' las funciones nombradas van automaticamente
// al scope global, entonces se las puede llamar de cualquier lado
// function like(characterID) {

// Al trabajar con module exports se activa el 'modo estricto',
// entonces si queremos una funcion global debemos haceerlo explicito
window.like = function (characterID) {
  // console.log("hay un like para el character", characterID);

  // si el id esta en la lista hay que sacarlo, sino agregarlo
  // el indexOf nos devuelve la posicion del elemento en la lista
  // si el elemento no esta indexOf devuelve -1
  let characterIndex = likedCharacters.indexOf(characterID);
  if (characterIndex === -1) {
    likedCharacters.push(characterID);
    renderContador();
  } else {
    likedCharacters.splice(characterIndex, 1);
    renderContador();
  }
  // console.log(likedCharacters);
  renderCharacters();
};

const puntoFlotante = document.querySelector(".flotante");
function renderContador() {
  puntoFlotante.innerHTML = `${likedCharacters.length}`;
}
// suma de strings
// let valor = "hola ";
// valor += "Leon";
// console.log(valor);

// array de objetos
// const characters = [
//   { name: "Spiderman", age: "23" },
//   { name: "Captain Marvel", age: "53" },
//   { name: "Hulk", age: "3" },
// ];
// for (i = 0; i < characters.length; i++) {
//   console.log("character", characters[i].name, characters[i].age);
// }

renderCharacters();
