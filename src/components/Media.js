export default function Media(character, likedClass){
    return`
    <div class="media">
    <button class="icon" onclick="like(${character._id})" >
      <i class="${likedClass}"></i>
    </button>
    <button class="icon">
      <i class="far fa-comment"></i>
    </button>
  </div>
    `;
}