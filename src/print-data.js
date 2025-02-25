import { result, repos, getRepos } from "./api.js";
import { divProfile } from "./dev-profile/div-profile.js";
import { divRepo } from "./dev-profile/div-repos.js";
import { notExistUser } from "./dev-profile/error.js";

const html = document.querySelector("html");
const body = document.querySelector("body");
const main = document.createElement("main");

main.className =
  "flex flex-col items-center justify-center w-full h-full md:flex-row";

export async function printData() {
  if (!result) {
    const erro = notExistUser();
    main.appendChild(erro);
    body.prepend(main);
    html.appendChild(body);
    return;
  }

  const stars = repos.reduce((acc, repo) => acc + repo.stargazers_count, 0);
  const divProf = divProfile(stars);
  main.appendChild(divProf);

  const containerRepos = document.createElement("div");
  containerRepos.className =
    "bg-gray-100 flex flex-col w-full md:overflow-auto md:flex-1 md:h-screen";
  repos.forEach((repo) => {
    const repoDiv = divRepo(repo);
    containerRepos.appendChild(repoDiv);
  });

  const buttonMore = document.createElement("button");
  buttonMore.className = `self-center ${
    repos.length < 30 ? "text-gray-light" : "bg-gray-200"
  } text-black text-xl font-normal px-12 py-2 rounded-md mt-5 shadow-md`;
  buttonMore.textContent = "Carregar mais";

  buttonMore.addEventListener("click", async () => {
    const nextPage =
      Number.isInteger(repos.length / 30) && repos.length / 30 + 1;
    if (!nextPage) {
      buttonMore.setAttribute("disabled", true);
      buttonMore.classList.add("text-gray-light");
      return;
    }
    const newRepos = await getRepos(nextPage);
    console.log(newRepos);

    newRepos.forEach((repo) => {
      const repoDiv = divRepo(repo);
      containerRepos.insertBefore(repoDiv, buttonMore);
    });

    repos.push(...newRepos);
  });

  containerRepos.appendChild(buttonMore);
  main.appendChild(containerRepos);
  body.prepend(main);
  html.appendChild(body);

  console.log(result);
  console.log(repos);
}

printData();
