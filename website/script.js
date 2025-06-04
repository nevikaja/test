document.getElementById('commentForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const firstName = document.getElementById('firstName').value.trim();
  const lastName = document.getElementById('lastName').value.trim();
  const age = document.getElementById('age').value.trim();
  const gender = document.getElementById('gender').value;
  const country = document.getElementById('country').value.trim();
  const comment = document.getElementById('comment').value.trim();

  if (firstName && lastName && age && gender && country && comment) {
    const container = document.getElementById('comments');
    const div = document.createElement('div');
    div.className = 'comment';
    div.innerHTML = `<strong>${firstName} ${lastName}</strong> (<em>${age}, ${gender}, ${country}</em>)<p>${comment}</p>`;
    container.appendChild(div);
    this.reset();
  }
});
