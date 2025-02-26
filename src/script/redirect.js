function redirectToProfile(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  if (username) {
    window.location.href = `dev-profile.html?username=${username}`;
  } else {
    alert("Digite um nome de usuário válido");
  }
}
