/*
// FUNÇÕES NATIVAS JS

// FUNÇÃO MAP()
// percorre uma lista e cria uma nova lista com base na condição

let numeros = [1, 2, 3, 4];

let numerosDobrados = numeros.map(function(num){
    return num * 2;
})

// retorno -> [2, 4, 6, 8]

console.log(numerosDobrados);

// ou assim:
// Arrow function com retorno impícito

let numerosDobradosArrow = numeros.map(num => num * 2);

// quando eu preciso usar o return?
// quando a função precisa ter mais de uma linha
// a setinha resume o function

let resultado;
numeros.map(num => {
    let resultado = num * 2;
    return resultado;
})

console.log(resultado);

// FILTER
// Filtra elementos com base em uma condição

let numeros = [5, 10, 15, 20];

// num -> palavrinha auxiliar
let maioresQueDez = numeros.filter(num => num > 10);
console.log(maioresQueDez); // [15, 20]


// REDUCE
// Reduz os valores de um array para um único valor
let numeros = [1, 2, 3, 4];

// acumulador inicia em 0
// variavel "auxiliar" é o "num"
// acumulador inicia em zero e soma com o auxiliar até o último valor do array
let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0);

console.log(soma);


// FIND
// Retorna o primeiro elemento que atende a condição
let produtos = [
    { id: 1, nome: "Teclado", preco: 50 }, //produto 
    { id: 2, nome: "Mouse", preco: 30 }, //produto 
    { id: 2, nome: "Caderno", preco: 30 }, //produto 
]

let item = produtos.find(produto => produto.id === 2);
console.log(item);

let itemFiltrado = produtos.filter(produto => produto.id === 2);
console.log("Usando filter: " , itemFiltrado);


// SPLIT
// Divide a string em partes, transformando em um array

let frase = "JS é top";

// split(" ") com espaço no meio das aspas -> separa as palavras por epaço, em um array
let palavras = frase.split(" ");
console.log(palavras);

// sem espaço -> separa todas as letras dentro do array
// let palavras = frase.split("");


// TRIM
// trim remove espaços no início e final de uma string

let nome = "   Paulo   ";
let nomeLimpo = nome.trim();

console.log(nome);
console.log(nomeLimpo);

// INCLUDES
// Verifica se existe um valor dentro de uma lista e retorna um booleano verdadeiro ou falso

let frutas = ["maçã", "banana"];

let frutasIncludes = frutas.includes("banana");
console.log(frutasIncludes) //true

// toLowerCase -> transforma texto em minúsculo
// toUpperCase -> transforma texto em maiúsculo
let nome = "KESSIA";
let cargo = "instrutora";

console.log(nome.toLowerCase());  //kessia
console.log(cargo.toUpperCase());  //INSTRUTORA

// FOREACH

let nomes = ["João", "Guilherme", "Maria"];

nomes.forEach(nome => console.log(`Seu nome é ${nome}`));

// SOME
// Verifica se pelo menos um item atende à condição
// Retorna booleano
let numeros = [1, 3, 5, 8];

let temPar = numeros.some(num => num % 2 === 0);
console.log(temPar);  //true


// EVERY
// Verifica se todos os itens atendem à condição
// retorna booleano
let todosPares = numeros.every(num => num % 2 === 0);
console.log(todosPares); //false

// SORT
// Ordena os elementos do array por ordem crescente

let numeros = [3, 10, 5, 2, 4];
let letras = ["c", "a", "x", "h"];

// para letras
letras.sort();
console.log(letras);

// para números
numeros.sort((a, b) => a - b);
console.log(numeros);
// exemplo: 3 - 10 = -7. o complilador percebe que o número é negativo e entende que o segundo número é maior que o primeiro.

// REVERSE
// Inverte a ordem dos elementos
let numeros = [1, 2, 3];

numeros.reverse();
console.log(numeros);

// JOIN
// Junta os elementos do array em uma string
let palavras = ["JS", "é", "top"];

let frase = palavras.join(" ");
console.log(frase);  //"JS é top"

// PUSH
// POP
// SHIFT
// UNSHIFT
let lista = ["A", "B"];

// PUSH = adiciona elementos no final do array
lista.push("C");  // adiciona
console.log(lista);

// POP -> Remove elementos no final da lista
lista.pop();  //remove
console.log(lista);

// SHIFT -> Remove do início do array
lista.shift();
console.log(lista);

// UNSHIFT -> Adiciona elemento no início do array
lista.unshift("A");  // adiciona
console.log(lista);

// SLICE
// Cria uma cópia de uma parte da lista

//  
//     array.slice(inicial, final);

//     inicial -> onde começa
//     final -> onde termina (não inclui a posição/índice/index);

// 

let numeros = [1, 2, 3, 4];

let parte = numeros.slice(1, 3)  // 1 e 3 são as posições do array
console.log(parte);  // 2, 3


// SPLICE
// Remove ou adiciona elementos em QUALQUER POSIÇÃO

// 
//  array.splice(index, count, item1, ..., itemX);
//
//  index -> posição do elemento no array
//  count -> núero de itens a serem removidos (pode ser 0)
//  item1, ..., itemX -> itens a serem adicionados
//

let numeros = [1, 2, 3, 4];

// removendo elementos, sem adicionar
numeros.splice(1, 1);
console.log(numeros);  // [1, 3, 4]

//Removendo elementos e adicionando mais dois elementos
let frutas = ["Banana", "Laranja", "Maçã", "Manga"];

// frutas.splice(0, 3, "Limão", "Kiwi");
// console.log(frutas);  // ["Limão", "Kiwi", "Manga"]

frutas.splice(2, 0, "Limão", "Kiwi");
console.log(frutas);

//REPLACE
// Substitui uma parte da string

//
// replace(valorProcurado, valorQueSubstitui);
// 

let texto = "Olá mundo!";

let novoTexto = texto.replace("mundo", "cliente");
console.log(novoTexto);

// NOSSAS FUNÇÕES
function exibirMensagem() {
    console.log("Bem vindo(a)!");
}

// Executnado a função criada
exibirMensagem();

// Função com parâmetros
function cumprimentar(apelido) {
    console.log(`Olá, ${apelido}`);
}

cumprimentar("Ana");
cumprimentar("Carlos");

// Função com mais de um parâmetro (arrow function)
const somar = (numero1, numero2) => numero1 + numero2;

console.log(somar(1, 2));

function somarNovo(numero1, numero2) {
    console.log(numero1 + numero2)

    // para poder usar o resultado: 
    //let resultado = numero1 + numero2
    //return resultado
}

// PROMPT
// recebe/solicita informação do usuário
// o valor recebodo pelo prompt() normalmente é string

// let nome - promp("Digite o seu nome: ")
// console.log(nome);
// alert(nome);

// recebendo um número e convertendo
// Number() -> converte de forma genérica
let idade = Number(prompt("Digite sua idade: "));

// ParseInt() -> converte o valor para número inteiro
idade = parseInt(prompt("Digite sua idade: "));

// ParseFloat() -> converte o valor para número decimal/ponto flutuante
idade = parseFloat(prompt("Digite sua idade: "));

// O QUE VEREMOS NAS PRÓXIMAS AULAS
// SPOILER......
*/

let textoP = document.getElementById("texto");

let saudacao = prompt("Digite a saudação");

if(saudacao == "bom dia") {
    textoP.textContent = saudacao;  // textContent insere o conteúdo de texto dentro da tag
} else {
    textoP.textContent = "SEGUNDOUUUUUU! :)";
}