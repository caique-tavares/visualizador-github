function redirectToProfile(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const key = document.getElementById("key").value;
  console.log(key);
  if (username || !key) {
    window.location.href = `dev-profile.html?username=${username}&key=${key}`;
  } else {
    alert("Digite um nome de usuário válido");
  }
}
