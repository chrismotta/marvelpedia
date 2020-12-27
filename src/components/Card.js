// Se dice que un componente debe ser agnostico de sus parents

export default function Card(caracter = {}, likedClass = "far fa-heart") {
  let content = "";
  content += `
    <div class="card">
      <div class="title">
      <div>Fecha de creación: ${caracter.creationYear}</div>
        <span class="text">${caracter.name}</span>
        <span class="real-name">${caracter.realName}<span>
        <span class="menu">
          <i class="fas fa-ellipsis-v"></i>
        </span>
      </div>
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
    content += `
          <div class="comment">
            <span class="user"><a href="">${arrayComments[g].user}</a></span>
            <span class="text">${arrayComments[g].comment}</span>
          </div>
          `;
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
