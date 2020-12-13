// tarea
// agrear al objeto characters realName y creationYear
// agregarlo al maquetado

const characters = [
  {
    name: "Spiderman",
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
        comment: "Muuy mala",
      },
      {
        user: "Chris",
        comment: "Muuy mas o menos",
      },
    ],
  },
  {
    name: "Captain Marvel",
    image:
      "https://dam.smashmexico.com.mx/wp-content/uploads/2019/05/marvel-captain-marvel-serie-regular-lanzamiento-marvel-fresh-start-cover-768x512.jpg",
    info:
      "Captain Marvel is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books.",
    comments: [],
  },
  {
    name: "Hulk",
    image: "https://i.blogs.es/2f9456/inmortal-hulk/450_1000.jpg",
    info:
      "Hulk is a fictional superhero created by writer-editor Stan Lee and writer-artist Steve Ditko. He first appeared in the anthology comic book Amazing Fantasy #15 (Aug. 1962) in the Silver Age of Comic Books.",
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
        <span class="text">${characters[i].name}</span>
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
              <span class="user">${arrayComments[g].user}</span>
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
