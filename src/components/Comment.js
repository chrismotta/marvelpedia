export default function Comment(commentData) {
  return `
  <div class="comment">
    <span class="user"><a href="">${commentData.user}</a></span>
    <span class="text">${commentData.comment}</span>
  </div>
  `;
}
