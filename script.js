function addComment(event, postId) {
  event.preventDefault();
  const form = event.target;
  const name = form.querySelector("input").value.trim();
  const message = form.querySelector("textarea").value.trim();

  if (!name || !message) return;

  const commentSection = document.getElementById(`comments-${postId}`);
  const commentDiv = document.createElement("div");
  commentDiv.classList.add("comment");
  commentDiv.innerHTML = `<strong>${name}</strong><p>${message}</p>`;

  commentSection.appendChild(commentDiv);
  form.reset();
}
