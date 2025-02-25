import { result, repos } from "./api.js";
import { divProfile } from "./components/div-profile.js";
import { divRepo } from "./components/div-repos.js";
import { notExistUser } from "./error.js";

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

  const divProf = divProfile();
  main.appendChild(divProf);

  const containerRepos = document.createElement("div");
  containerRepos.className = "w-full md:overflow-auto md:flex-1 md:h-screen";
  repos.forEach((repo) => {
    const repoDiv = divRepo(repo);
    containerRepos.appendChild(repoDiv);
  });

  main.appendChild(containerRepos);
  body.prepend(main);
  html.appendChild(body);

  console.log(result);
  console.log(repos);
}

printData();
