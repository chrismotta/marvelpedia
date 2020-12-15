// tarea
// agrear al objeto characters realName y creationYear
// agregarlo al maquetado
// el lugar donde puse la fecha de creacion es muy provicional
// no se por que el parentesis que use en el after aparece como con un espacio
// pude hacerlo con grid area (esta buenisimo y facilita una banda las cosas) peero no pude tirar los comentarios abajo de la imagen y la /// descripcion

const characters = [
  {
    name: "Spiderman",
    realName: "Peter Parker",
    creationYear: "1962",
    image:
      "https://cnet2.cbsistatic.com/img/V2x0T36y6bka2yIn6rpVFDNHoRk=/center/top/2019/03/26/13d0a566-7355-4381-be24-dee281227504/spider-man-far-from-home-promo-image-1.jpg",
    info:
      "Spider-Man is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books.",
    comments: [
      {
        user: "Pali",
        comment: "Muuy buena",
      },
      {
        user: "Leon",
        comment: "Me parece una excelente publicacion, sigan asi desarrolladores!",
      },
      {
        user: "Chris",
        comment: "Muuy mas o menos",
      },
    ],
  },
  {
    name: "Captain Marvel",
    realName: "Carol Danvers",
    creationYear: "1986",
    image:
      "https://dam.smashmexico.com.mx/wp-content/uploads/2019/05/marvel-captain-marvel-serie-regular-lanzamiento-marvel-fresh-start-cover-768x512.jpg",
    info:
      "Captain Marvel is the name of several fictional superheroes appearing in American comic books published by Marvel Comics. Most of these versions exist in Marvel's main shared universe, known as the Marvel Universe.",
    comments: [],
  },
  {
    name: "Hulk",
    realName:"Bruce Banner",
    creationYear:"1962",
    image: "https://i.blogs.es/2f9456/inmortal-hulk/450_1000.jpg",
    info:
      "In his comic book appearances, the character is both the Hulk, a green-skinned, hulking and muscular humanoid possessing a vast degree of physical strength, and his alter ego Dr. Robert Bruce Banner, a physically weak, socially withdrawn, and emotionally reserved physicist.",
    comments: [],
  },
];

// const card = "hola " + character.name + ", como estas?";//concat string
// const card = `hola ${character.name}, como estas?`;//template literal
// console.log(card);

// const card = document.createElement("div");
// card.classList.add("card");

let cards = "";
// cada personaje
for (i = 0; i < characters.length; i++) {
  cards += `
    <div class="card">
      <div class="title">
      <div>Fecha de creación: ${characters[i].creationYear}</div>
        <span class="text">${characters[i].name}</span>
        <span class="real-name">${characters[i].realName}<span>
        <span class="menu">
          <i class="fas fa-ellipsis-v"></i>
        </span>
      </div>
      <div class="card-body">
        <div class="image">
          <img
            src="${characters[i].image}"
            alt=""
          />
        </div>
        <div class="card-info">
          <div class="media">
            <span class="icon">
              <i class="far fa-heart"></i>
            </span>
            <span class="icon">
              <i class="far fa-comment"></i>
            </span>
          </div>
          <div class="description">
            ${characters[i].info}
          </div>
          <div class="comments-container">`;
  // cada comentario
  const arrayComments = characters[i].comments;
  for (g = 0; g < arrayComments.length; g++) {
    cards += `
            <div class="comment">
              <span class="user"><a href="">${arrayComments[g].user}</a></span>
              <span class="text">${arrayComments[g].comment}</span>
            </div>
            `;
  }

  cards += `
          </div>
        </div>
      </div>
    </div>
  `;
}

const cardContainer = document.querySelector("#cards-container");
// Añadir elementos estilo string concat (vieja usanza)
cardContainer.innerHTML = cards;
// const card2 = card;
// cardContainer.appendChild(card);

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
