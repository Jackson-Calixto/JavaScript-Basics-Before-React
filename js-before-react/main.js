// Array Methods

const array = [1, 2, 3, 4, 5];

const novoArray = []; 

array.forEach((item) => {
  novoArray.push(item * 2);
});

document.body.innerText = JSON.stringify(novoArray);
