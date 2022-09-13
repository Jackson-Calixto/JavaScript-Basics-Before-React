// Promises async await trycatch finally
async function buscaDadosGithub() {
  try {
    const response = await fetch(
      "https://xapi.github.com/users/Jackson-Calixto"
    );
    const body = await response.json();
    console.log(body);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally...");
  }
}

buscaDadosGithub();
