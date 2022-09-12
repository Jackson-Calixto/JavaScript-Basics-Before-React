// Objects

const User = {
  name: "Jackson",
  nickname: "Calixto",
  idade: 43,
  address: {
    street: "Rua Teste",
    number: 176,
  },
};

// Destructuring

function mostraIdade({ idade }) {
  return idade;
}

// Rest operator

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const [first, , third, ...rest] = array;

document.body.innerText = JSON.stringify({ first, third, rest });
