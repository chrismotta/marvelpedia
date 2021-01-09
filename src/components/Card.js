import Comment from "./Comment.js";
import CardHeader from "./CardHeader.js";

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
        <div class="image">
          <img
            src="${caracter.image}"
            alt=""
          />
        </div>
        <div class="card-info">
          <div class="media">
            <button class="icon" onclick="like(${caracter._id})" >
              <i class="${likedClass}"></i>
            </button>
            <button class="icon">
              <i class="far fa-comment"></i>
            </button>
          </div>
          <div class="description">
            ${caracter.info}
          </div>
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

//TODO: pasar el comentario dentro del componente Comment, importarlo y renderizarlo
