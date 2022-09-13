// Promises async await
async function buscaDadosGithub() {
  const response = await fetch("https://api.github.com/users/Jackson-Calixto");
  const body = await response.json();
  console.log(body);
}

buscaDadosGithub();
