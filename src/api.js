const GITHUB_TOKEN = "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";

async function fetchGitHubUser(user) {
  try {
    const res = await fetch(`https://api.github.com/users/${user}`, {
      per_page: 100,
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    if (!res.ok) {
      return false;
    }
    return await res.json();
  } catch (err) {
    console.log("Erro ao buscar usuário", err);
  }
}

async function fetchGitHubApi(user) {
  try {
    const res = await fetch(`https://api.github.com/users/${user}/repos`, {
      headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Erro ao buscar repositórios", err);
  }
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
