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

// Rest operator

const {name, ...rest} = User

document.body.innerText = JSON.stringify(rest);
