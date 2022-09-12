// Array Methods

const array = [1, 2, 3, 4, 5];

const novoArray = array.map((item) => {
  if (item % 2 === 0) 
    return item * 10;
  
  return item
});

document.body.innerText = JSON.stringify(novoArray);
