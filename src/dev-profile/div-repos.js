export function divRepo(repo) {
  const div = document.createElement("div");

  const a = document.createElement("a");
  a.href = repo.html_url;
  const repoContainer = document.createElement("div");
  repoContainer.className =
    "bg-gray-200 flex flex-col gap-4 w-full items-start justify-start py-2 px-4 border-b-1 border-gray-100 rounded-xl md:px-5 lg:px-10 md:hover:bg-black";

  const repoDetails = document.createElement("div");
  repoDetails.className = "w-full space-y-1";

  const repoName = document.createElement("h3");
  repoName.className = "text-2xl font-medium";
  repoName.textContent = repo.name;

  const repoDescription = document.createElement("p");
  repoDescription.className = "break-words italic text-md";
  repoDescription.textContent = repo.description
    ? repo.description
    : "Sem descrição";

  const repoStats = document.createElement("div");
  repoStats.className =
    "flex gap-3 justify-between items-center md:justify-start";

  const stars = document.createElement("span");
  stars.className = "flex font-medium items-center";
  stars.innerHTML = `<img src="assets/star-gray.svg" alt="" />${repo.stargazers_count} stars`;

  const updated = document.createElement("span");
  updated.className = "font-medium ";
  updated.textContent = `• Updated ${new Date(
    repo.updated_at
  ).toLocaleDateString()}`;

  repoStats.appendChild(stars);
  repoStats.appendChild(updated);

  repoDetails.appendChild(repoName);
  repoDetails.appendChild(repoDescription);
  repoDetails.appendChild(repoStats);

  repoContainer.appendChild(repoDetails);
  a.appendChild(repoContainer);
  div.appendChild(a);

  return div;
}
