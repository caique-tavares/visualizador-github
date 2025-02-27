import { result } from "../script/api.js";

export function divProfile(star) {
  const div = document.createElement("div");
  div.className =
    "bg-gray-500 text-white w-full md:w-[400px] flex flex-col items-start justify-center gap-5 px-5 py-8 md:h-screen md:overflow-auto md:justify-center md:pt-40 lg:overflow-hidden lg:pt-10";

  const profileImage = document.createElement("img");
  profileImage.src = result.avatar_url;
  profileImage.alt = "Profile Picture";
  profileImage.className =
    "w-[180px] h-[180px] self-center rounded-full object-cover mt-10 md:m-0";
  div.appendChild(profileImage);

  const nameContainer = document.createElement("div");
  const fullName = document.createElement("h2");
  fullName.className = "text-xl font-semibold";
  fullName.textContent = result.name ? `${result.name}` : "Sem nome";

  const username = document.createElement("h3");
  username.textContent = `@${result.login}`;

  nameContainer.appendChild(fullName);
  nameContainer.appendChild(username);
  div.appendChild(nameContainer);

  const bioContainer = document.createElement("div");
  bioContainer.className = "w-full";

  const bio = document.createElement("p");
  bio.className = "break-words text-gray-light text-sm";
  bio.textContent = result.bio ? `${result.bio}` : "Sem bio";

  bioContainer.appendChild(bio);
  div.appendChild(bioContainer);

  const statsContainer = document.createElement("div");
  statsContainer.className =
    "flex gap-4 text-md items-center self-center md:self-start";

  const followers = document.createElement("span");
  followers.className =
    "flex flex-col items-center justify-center text-center gap-1 md:flex-row";
  followers.innerHTML = `<img src="assets/followers.svg" alt="icone representando um grupo de pessoas" class="size-9 md:size-6" />${result.followers} followers`;

  const following = document.createElement("span");
  following.className =
    "flex flex-col items-center justify-center text-center gap-1 md:flex-row";
  following.innerHTML = `<img src="assets/heart.svg" alt="icone de coração" class="size-9 md:size-6"/>${result.following} following`;

  const stars = document.createElement("span");
  stars.className =
    "flex flex-col gap-1 items-center justify-center text-center md:flex-row";
  stars.innerHTML = `<img src="assets/star.svg" alt="icone de estrela" class="size-9 md:size-6" />${star} stars`;

  statsContainer.appendChild(followers);
  statsContainer.appendChild(following);
  statsContainer.appendChild(stars);
  div.appendChild(statsContainer);

  const detailsContainer = document.createElement("div");
  detailsContainer.className = "flex flex-col gap-2 items-start text-sm";

  const organization = document.createElement("span");
  organization.className = "flex gap-2";
  organization.innerHTML = result.company
    ? `<img src="assets/corporate.svg" alt="" /> ${result.company}`
    : `<img src="assets/corporate.svg" alt="" />Não há vinculo com empresa`;

  const location = document.createElement("span");
  location.className = "flex gap-2";
  location.innerHTML = result.location
    ? `<img src="assets/location.svg" alt="" />${result.location}`
    : '<img src="assets/location.svg" alt="" />Sem localização';

  const email = document.createElement("span");
  email.className = "flex gap-2";
  email.innerHTML = result.email
    ? `<img src="assets/email.svg" alt="" />${result.email}`
    : '<img src="assets/email.svg" alt=""/>Sem e-mail';

  const link = document.createElement("a");
  link.href = result.blog ? result.blog : "#";

  const website = document.createElement("span");
  website.className = "flex gap-2";
  website.innerHTML = result.blog
    ? `<img src="assets/link.svg" alt="" />${result.blog}`
    : '<img src="assets/link.svg" alt="" />Sem website';

  const twitter = document.createElement("span");
  twitter.className = "flex gap-2";
  twitter.innerHTML = result.twitter_username
    ? `<img src="assets/twitter.png" alt="" class="size-6" />@${result.twitter_username}`
    : '<img src="assets/twitter.png" alt="" class="size-6" />Sem twitter';

  detailsContainer.appendChild(organization);
  detailsContainer.appendChild(location);
  detailsContainer.appendChild(email);
  detailsContainer.appendChild(link);
  link.appendChild(website);
  detailsContainer.appendChild(twitter);
  div.appendChild(detailsContainer);

  const backButton = document.createElement("a");
  backButton.href = "index.html";
  backButton.className =
    "self-center bg-white text-black px-12 py-2 rounded-md mt-5 hover:bg-gray-200 mb-10 md:m-0";
  backButton.textContent = "Voltar";
  div.appendChild(backButton);

  return div;
}
