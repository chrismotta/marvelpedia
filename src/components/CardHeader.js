export default function CardHeader(character) {
  return `
       <div class="title">
      <div>Primera aparición: ${character.creationYear}</div>
      <a href="./character.html?id=${character._id}">
        <span class="text">${character.name}</span>
        <span class="real-name">${character.realName}<span>
        </a>
        <span class="menu">
          <i class="fas fa-ellipsis-v"></i>
        </span>
      </div>
  `;
}
