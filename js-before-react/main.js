// Array Methods

const array = [1, 2, 3, 4, 5];

const novoArray = array.map((item) => {
  return item * 2;
});

document.body.innerText = JSON.stringify(novoArray);
