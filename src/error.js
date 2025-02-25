export function notExistUser() {
  const div = document.createElement("div");
  div.className =
    "flex items-center justify-center h-screen w-screen bg-gray-bg";

  const divErro = document.createElement("div");
  divErro.className =
    "flex flex-col items-center justify-center gap-4 bg-gray-100 px-7 h-[400px] w-[370px] rounded-xl shadow-xl md:h-[450px] md:w-auto";

  const erroImg = document.createElement("img");
  erroImg.src = "assets/erro.png";
  erroImg.alt = "Error";
  erroImg.className = "size-25";

  const h2 = document.createElement("h2");
  h2.className = "text-red-500 text-2xl text-center font-semibold md:text-3xl";
  h2.textContent = "Usuário informado não foi encontrado";

  const backButton = document.createElement("a");
  backButton.href = "index.html";
  backButton.className =
    "self-center bg-gray-200 text-black text-xl font-normal px-12 py-2 rounded-md mt-5 shadow-md";
  backButton.textContent = "Voltar";

  divErro.appendChild(erroImg);
  divErro.appendChild(h2);
  divErro.appendChild(backButton);
  div.appendChild(divErro);

  return div;
}
