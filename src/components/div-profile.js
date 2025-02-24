import { result } from "../api.js";

export function divProfile() {
  const div = document.createElement("div");
  div.className =
    "bg-gray-500 text-white w-full flex flex-col items-start justify-center gap-5 px-5 py-10 md:h-screen md:w-[470px] md:justify-center";

  const profileImage = document.createElement("div");
  profileImage.className = "w-[200px] h-[200px] self-center rounded-full";
  profileImage.style.backgroundImage = `url(${result.avatar_url})`;
  profileImage.style.backgroundSize = "cover";
  div.appendChild(profileImage);

  const nameContainer = document.createElement("div");
  const fullName = document.createElement("h2");
  fullName.className = "text-2xl font-semibold";
  fullName.textContent = `${result.name}`;
  const username = document.createElement("h3");
  username.textContent = `@${result.login}`;
  nameContainer.appendChild(fullName);
  nameContainer.appendChild(username);
  div.appendChild(nameContainer);

  const bioContainer = document.createElement("div");
  bioContainer.className = "w-full";
  const bio = document.createElement("p");
  bio.className = "break-words text-gray-light";
  bio.textContent = result.bio ? `${result.bio}` : "Sem bio";
  bioContainer.appendChild(bio);
  div.appendChild(bioContainer);

  const statsContainer = document.createElement("div");
  statsContainer.className = "flex gap-4";
  const followers = document.createElement("span");
  followers.className = "flex gap-1";
  followers.innerHTML = `<img src="assets/followers.svg" alt="" />${result.followers} followers`;
  const following = document.createElement("span");
  following.className = "flex gap-1";
  following.innerHTML = `<img src="assets/heart.svg" alt="" />${result.following} following`;
  const stars = document.createElement("span");
  stars.className = "flex gap-1";
  stars.innerHTML = `<img src="assets/star.svg" alt="" />0 stars`;
  statsContainer.appendChild(followers);
  statsContainer.appendChild(following);
  statsContainer.appendChild(stars);
  div.appendChild(statsContainer);

  const detailsContainer = document.createElement("div");
  detailsContainer.className = "flex flex-col gap-2 items-start";

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
    "self-center bg-white text-black px-12 py-2 rounded-md mt-5";
  backButton.textContent = "Voltar";
  div.appendChild(backButton);

  return div;
}

/* <div class="bg-gray-500 text-white w-full flex flex-col items-start justify-center gap-5 px-5 py-10 md:h-screen md:w-[470px] md:justify-center">
  <div class="bg-black w-[150px] h-[150px] self-center"></div>
  <div>
    <h2 class="text-2xl font-semibold">Developer's full name</h2>
    <h3>@username</h3>
  </div>
  <div class="w-full">
    <p class="break-words text-gray-light">
      aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
    </p>
  </div>
  <div class="flex gap-4">
    <span class="flex gap-1">
      <img src="assets/followers.svg" alt="" />
      200 followers
    </span>
    <span class="flex gap-1">
      <img src="assets/heart.svg" alt="" />
      130 following
    </span>
    <span class="flex gap-1">
      <img src="assets/star.svg" alt="" />
      100 stars
    </span>
  </div>
  <div class="flex flex-col gap-2 items-start">
    <span class="flex gap-2">
      <img src="assets/corporate.svg" alt="" /> organization
    </span>
    <span class="flex gap-2">
      <img src="assets/location.svg" alt="" />
      location
    </span>
    <span class="flex gap-2">
      <img src="assets/email.svg" alt="" />
      email
    </span>
    <span class="flex gap-2">
      <img src="assets/link.svg" alt="" />
      www.mywebsite.com
    </span>
    <span class="flex gap-2">
      <img src="assets/twitter.png" alt="" class="size-6" />
      @myTwitter
    </span>
  </div>
  <a
    href="index.html"
    class="self-center bg-white text-black px-12 py-2 rounded-md mt-5"
  >
    Voltar
  </a>
</div>; */
