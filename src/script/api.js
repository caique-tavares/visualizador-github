const GITHUB_TOKEN = "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";

async function fetchGitHubUser(user) {
  try {
    const res = await fetch(`https://api.github.com/users/${user}`, {
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

async function fetchGitHubApi(user, page = 1) {
  try {
    const res = await fetch(
      `https://api.github.com/users/${user}/repos?page=${page}`,
      {
        headers: {
          Authorization: `token ${GITHUB_TOKEN}`,
        },
      }
    );
    const data = await res.json();
    return data;
  } catch (err) {
    console.log("Erro ao buscar repositórios", err);
    return [];
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

export async function getRepos(page = 1) {
  const params = new URLSearchParams(window.location.search);
  const username = params.get("username");
  if (username) {
    const result = await fetchGitHubApi(username, page);
    return result;
  }
  return [];
}
export const result = await getUser();
export const repos = await getRepos();
