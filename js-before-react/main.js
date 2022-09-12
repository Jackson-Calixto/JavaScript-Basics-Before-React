// Objects

const User = {
  name: "Jackson",
  idade: 43,
  address: {
    street: "Rua Teste",
    number: 176,
  },
};

document.body.innerText = "nickname" in User;
