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

function mostraIdade({idade}) {
  return idade;
}

document.body.innerText = mostraIdade(User);
