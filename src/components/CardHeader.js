export default function CardHeader(character) {
  return `
    <a href="./character.html?id=${character._id}">
      <div class="title">
      <div>Primera aparición: ${character.creationYear}</div>
        <span class="text">${character.name}</span>
        <span class="real-name">${character.realName}<span>
        <span class="menu">
          <i class="fas fa-ellipsis-v"></i>
        </span>
      </div>
    </a>
  `;
}
