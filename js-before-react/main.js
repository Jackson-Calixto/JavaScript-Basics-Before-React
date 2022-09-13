// Promises async await trycatch
async function buscaDadosGithub() {
  try {
    const response = await fetch(
      "https://xapi.github.com/users/Jackson-Calixto"
    );
    const body = await response.json();
    console.log(body);
  } catch (error) {
    console.log(error);
  }
}

buscaDadosGithub();
