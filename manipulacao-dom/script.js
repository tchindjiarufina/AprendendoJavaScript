
// querySelectorAll pega todos os elementos 
const elementos = document.querySelectorAll(".texto");

console.log(elementos);

// Percorrendo a lista  e pegando cada elemento p
elementos.forEach(elemento => console.log(elemento));

// percorrendo a lista e pegando o texto (innerText)
elementos.forEach(elemento => console.log(elemento.innerText));

// alterando textos
elementos.forEach(elemento => {
    elemento.innerText = "Alterado";
    //elemento.innerText = "Alterado";
})

//innerHTML - trocar as tags
elementos.forEach(elemento => {
    elemento.innerHTML = <h2>Item</h2>;
 
})
elementos.forEach(elemento => {
  elemento.style.color = "#350e5aff";
 
})

//EVENTOS COM JS
// São as ações do usuario

// const botao = document.getElementById("btn");

// botao.addEventListener("click", () => {
//      alert("Voce clicou!")
// });

//evento de digitação

//evento input -> ele dispara sempre que digita em tempo real 

//INPUT
const campo = document.getElementById("campo");
const resultado = document.getElementById("resultado");

// campo.addEventListener("input", () => {
//     //value -> o que esta sendo digitado dentro do campo
//     resultado.innerText = campo.value;
// })

//KEYUP
// so dispara quando solta a tecla
campo.addEventListener("keyup", () => {
    //value -> o que esta sendo digitado dentro do campo
    resultado.innerText = campo.value;
})

