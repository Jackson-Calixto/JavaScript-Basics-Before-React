// Promises
// .then / .catch

fetch("https://api.github.com/users/Jackson-Calixto")
  .then(response => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
