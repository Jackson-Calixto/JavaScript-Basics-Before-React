// Array Methods Reduce

const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acc, item) => {
  document.body.innerText += acc + "-" + item + "|";
}, 0);
