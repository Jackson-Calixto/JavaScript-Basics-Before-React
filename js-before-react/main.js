// Promises finally
fetch("https://api.github.com/users/Jackson-Calixto")
  .then((response) => response.json())
  .then(body => console.log(body))
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log('Finally...')
  });
