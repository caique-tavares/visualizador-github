const GITHUB_TOKEN = "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";

async function fetchGitHubApi(user) {
  const res = await fetch(`https://api.github.com/users/${user}/repos`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  const data = await res.json();
  return data;
}

async function fetchGitHubUser(user) {
  const res = await fetch(`https://api.github.com/users/${user}`, {
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
    },
  });
  return await res.json();
}

async function getUser() {
  const params = new URLSearchParams(window.location.search);
  const username = params.get("username");
  if (username) {
    const result = await fetchGitHubUser(username);
    return result;
  }
}

async function getRepos() {
  const params = new URLSearchParams(window.location.search);
  const username = params.get("username");
  if (username) {
    const result = await fetchGitHubApi(username);
    return result;
  }
}

export const result = await getUser();
export const repos = await getRepos();
// console.log(result);
