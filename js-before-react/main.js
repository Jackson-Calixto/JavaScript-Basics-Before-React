// NuNullish coalescing operator

const idade = 0;

// undefined, null == false

document.body.innerText = "Sua idade é: " + (idade ?? "Não informado");
