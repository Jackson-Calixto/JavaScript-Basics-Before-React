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

// Short syntax

const name = 'Jackson'
const idade = 43

const user = {
  name,
  idade
}

document.body.innerText = JSON.stringify({user})