// Objects

const User = {
  name: "Jackson",
  idade: 43,
  address: {
    street: "Rua Teste",
    number: 176,
  },
};

// Destructuring

const { address, idade: age, nickname = 'Jack'} = User;

document.body.innerText = JSON.stringify({ address, age, nickname });
