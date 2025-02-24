export function divRepo(repo) {
  const div = document.createElement("div");

  const repoContainer = document.createElement("div");
  repoContainer.className =
    "flex flex-col gap-4 w-full items-start justify-start py-2 px-10 border-b-1";

  const repoDetails = document.createElement("div");
  repoDetails.className = "w-full space-y-1";

  const repoName = document.createElement("h3");
  repoName.className = "text-xl";
  repoName.textContent = repo.name;

  const repoDescription = document.createElement("p");
  repoDescription.className = "break-words";
  repoDescription.textContent = repo.description || "No description available";

  const repoStats = document.createElement("div");
  repoStats.className = "flex gap-3";

  const stars = document.createElement("span");
  stars.className = "flex";
  stars.innerHTML = `<img src="assets/star-gray.svg" alt="" />${repo.stargazers_count} stars`;

  const updated = document.createElement("span");
  updated.textContent = `• Updated ${new Date(
    repo.updated_at
  ).toLocaleDateString()}`;

  repoStats.appendChild(stars);
  repoStats.appendChild(updated);

  repoDetails.appendChild(repoName);
  repoDetails.appendChild(repoDescription);
  repoDetails.appendChild(repoStats);

  repoContainer.appendChild(repoDetails);
  div.appendChild(repoContainer);

  return div;
}
