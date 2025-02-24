const button = document.getElementById('search');

async function fetchGitHubApi(user){
   const res = await fetch(`https://api.github.com/users/${user}/repos`)
    const data = await res.json();
    return data;
}

async function fetchGitHubUser(user) {
    const res = await fetch(`https://api.github.com/users/${user}`);
    if (!res.ok) throw new Error("Usuário não encontrado");
    return await res.json();
}


async function getRepos(user) {
    try {
        const repos = await fetchGitHubApi(user);
        console.log(repos);
        printProfile();
    } catch (error) {
        console.error("Erro ao buscar repositórios:", error);
    }
}

async function printProfile(user){

}

button.addEventListener('click', async (e)=>{
    const user = document.getElementById('inputUser').value
    console.log(user);
    e.preventDefault();
    await getRepos(user);
})