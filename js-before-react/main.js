// NuNullish coalescing operator

const idade = 0;

// 0, '', "", false, undefined, null == false

document.body.innerText = "Sua idade é: " + (idade || "Não informado");
