// Promises async await Promise Pending
async function buscaDadosGithub() {
  try {
    const response = await fetch(
      "https://api.github.com/users/Jackson-Calixto"
    );
    const body = await response.json();
    return body.name;
  } catch (error) {
    console.log(error);
  } finally {
    console.log("finally...");
  }
}

const name = buscaDadosGithub();

console.log(name);
