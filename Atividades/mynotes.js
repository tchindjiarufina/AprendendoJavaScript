
//1. Array (lista)

let numeros = [1, 2, 3, 4];
 
//É uma lista com valores guardados em colchetes ''[]''
// e cada valor tem uma posição. Geralmente começa pelo 0. 
// Então nessa lista o 1 vale 0, o 2 vale 1, o 3 vale 2, 4 vale 3.
// Para imprimir os numeros, pega o nome da lista (nesse caso seria "numeros")
//e chama pela posição

console.log(numeros[0]); // Aqui imprime 1
console.log(numeros[1]); // Aqui imprime 2
console.log(numeros[2]); // Aqui imprime 3
console.log(numeros[3]); // Aqui imprime 4


//2. Função que vai dentro de outra função
//Métodos como map e filter pedem uma função como "instrução". 
//Você entrega a receita e ele aplica em cada item.

//3. Arrow function (a setinha =>)
//  É só um jeito mais curto de escrever função. 

function dobrar(num) {
    return num * 2;
}

//existe o jeito mais curto de dizer isso usando a setinha (arrow function)

const dobrar = (num) => {
    return num * 2;
};

//se a função tiver so uma linha da para encurtar tirando as chaves {} e o return.

const dobrar = num => num * 2;

// 4. MAP

//Já o map ele basicamnete pega uma lista e uma função e entrega uma nova lista
// do mesmo tamanho. (confuso né mas calma)


let numerosNaturais = [1, 2, 3, 4]; //Aqui temos uma lista normal

let numerosDobrados = numeros.map(num => num * 2); // isso aq é a função. Ou seja o que 

// map vai fazer com a nossa primeira lista. O "numerosDobrados" é a nova lista que o map
//vai entregar para gente. Resumindo e traduzindo: "Os numeros da primeira lista, voce vai 
// multiplicar por 2 e me entregar uma nova lista com os resultados"

console.log(numerosDobrados); // [2, 4, 6, 8]

//posição 0: num = 1  →  1 * 2 = 2
//posição 1: num = 2  →  2 * 2 = 4
//posição 2: num = 3  →  3 * 2 = 6
//posição 3: num = 4  →  4 * 2 = 8

//Detalhe:A lista original nunca muda, se der console.log(numeros) vai entregar a lista 
//bonitinha da mesma forma, sem o resultados.

// 5. FILTER
// O nome ja diz tudo. O filter ele vai filtar (kkkkkkk) as variaveis da lista de 
//de acordo com a função

let numero = [5, 10, 15, 20]; // Um array comum :>

let maioresQueDez = numeros.filter(num => num > 10); // Aqui a função basicamente diz 
//"Filtra os numeros maiores de 10"

//5  > 10?  → false → fica de fora
//10 > 10?  → false → fica de fora
//15 > 10?  → true  → entra na lista nova
//20 > 10?  → true  → entra na lista nova

console.log(maioresQueDez); // E como esta na lista, o filter repassou os numeros 
// que cujo o valor são maiores que 10. Nesse caso seria = [15, 20]

//map	= transforma cada item	sempre igual ao original
//filter = seleciona quem passa no teste igual ou menor que o original

//6.REDUCE

//Ele é chatinho mas a logica por trás é bemmm legal!!
// Vamos imaginar um potinho e esse potinho a medida que vai passando pelos 
//da lista ele vai acumulando e sempre adicionando com o proximo da lista.

let numbers = [1, 2, 3, 4]; // Um array comum :>

let soma = numeros.reduce((acumulador, auxiliar) => acumulador + auxiliar, 0); //Aqui

// entra a função reduce. Ele vai pegar e vai passar por cada posição e o valor q estiver
// na posição atual ele vai somar e o resultado ele vai fazer o mesmo com a proxima posição.

//potinho começa em: 0

//rodada 1: potinho(0) + item(1) = 1   → potinho vira 1
//rodada 2: potinho(1) + item(2) = 3   → potinho vira 3
//rodada 3: potinho(3) + item(3) = 6   → potinho vira 6
//rodada 4: potinho(6) + item(4) = 10  → potinho vira 10

//acabou a lista → resultado final: 10

console.log(soma); // 10

