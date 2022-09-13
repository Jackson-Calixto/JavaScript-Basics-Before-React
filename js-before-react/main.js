// Promises fetch inline nested
// .then / .catch

fetch("https://api.github.com/users/Jackson-Calixto")
  .then((response) => response.json())
  .then(body => console.log(body))
  .catch((error) => {
    console.log(error);
  });
