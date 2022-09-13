// Array Methods Reduce

const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acc, item) => acc + item, 0);

document.body.innerText = JSON.stringify(soma);
