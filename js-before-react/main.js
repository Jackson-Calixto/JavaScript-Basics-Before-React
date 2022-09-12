// Objects

const user = {
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
  //   showFullAddress() {
  //     return "ok";
  //   },
  // },
};

// Optional Chaning

document.body.innerText = user.address.showFullAddress();
