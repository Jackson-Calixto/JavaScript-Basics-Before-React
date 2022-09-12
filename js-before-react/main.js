// Objects

const User = {
  name: "Jackson",
  nickname: "Calixto",
  idade: 43,
  // address: {
  //   street: "Rua Teste",
  //   number: 176,
  // },
};

// Optional Chaning

document.body.innerText = User.address ? User.address.street : "Não infomrado";
