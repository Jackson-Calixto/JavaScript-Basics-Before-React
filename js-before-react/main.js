// Promises fetch
// .then / .catch

fetch("https://api.github.com/users/Jackson-Calixto")
  .then((response) => {
    console.log(
      response.json()
        .then((body) => {
          console.log(body);
        })
    );
  })
  .catch((error) => {
    console.log(error);
  });
