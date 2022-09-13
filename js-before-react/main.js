// Promises fetch
// .then / .catch

fetch("https://api.github.com/users/Jackson-Calixto")
  .then((response) => {
    console.log(
      response.json()
        .then((responseText) => {
          console.log(responseText);
        })
        .catch((err) => {
          console.log(err);
        })
    );
  })
  .catch((error) => {
    console.log(error);
  });
