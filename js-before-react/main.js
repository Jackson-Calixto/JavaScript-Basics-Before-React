// Objects

const User = {
  name: "Jackson",
  nickname: "Calixto",
  idade: 43,
  // address: {
  //   street: "Rua Teste",
  //   number: 176,
  //   zip: {
  //     code: 89245000,
  //     city: "Araquari",
  //   },
  // },
};

// Optional Chaning

document.body.innerText = User.address
  ? User.address.zip
    ? User.address.zip.code
    : "Não informado"
  : "Não infomrado";
