import Comment from "./Comment.js";
import CardHeader from "./CardHeader.js";
import Image from "./Image.js";
import Media from "./Media.js";
import Description from "./Description.js"

// En el 'modo standard' las funciones nombradas van automaticamente
// al scope global, entonces se las puede llamar de cualquier lado
// function like(characterID) {

// Al trabajar con module exports se activa el 'modo estricto',
// entonces si queremos una funcion global debemos haceerlo explicito
function like(characterID, likedCharacters) {
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
}

// Se dice que un componente debe ser agnostico de sus parents
export default function Card(caracter = {}, likedClass = "far fa-heart") {
  let content = "";
  content += `
    <div class="card">
      ${CardHeader(caracter)}
      <div class="card-body">
        ${Image(caracter)}
        <div class="card-info">
        ${Media(caracter, likedClass)}
        ${Description(caracter)}
          <div class="comments-container">`;

  // cada comentario
  const arrayComments = caracter.comments;
  for (let g = 0; g < arrayComments.length; g++) {
    content += Comment(arrayComments[g]);
  }

  content += `
          </div>
        </div>
      </div>
    </div>
  `;
  return content;
}


