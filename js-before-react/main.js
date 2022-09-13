// Promises
// .then / .catch

const somaDoisNumeros = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(a + b);
    }, 2000);
  });
};

somaDoisNumeros(2, 3).then((soma) => {
  document.body.innerText = soma;
});
