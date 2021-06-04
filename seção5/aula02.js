/*
array contendo 5 elementos -> n = 5

// indices -> posição do elemento no array
 [0][1][2][3][4]

//valores em um array
[12]inteiro['geek']string[36]inteiro[true]boolean[52]inteiro

//detalhes sobre arrays
- possuem tamanho infinito*
- podemos colocar qualquer tipo de dado

*/

//forma 1
var alunos = new Array('Eduardo', 'Lucas', 'Bruno', 'Gabriel', 'Dante');
// var alunos = ['Eduardo', 'Lucas', 'Bruno', 'Gabriel', 'Dante'];
console.log(alunos);

//forma 2 (recomendada)

var notas = [1, 3 , 5 ,7 ,9];
console.log(notas);

//criando um array vazio
var dados =[];
console.log(dados);

// fazendo acesso ao valor de um indice
console.log(notas[2]);

//Alterando o valor a partir do índice
notas[2] = 12;
console.log(notas);

// Atenção ao acessar um valor com um indice que não existe
notas[9] = 10; //não existe
console.log(notas);


if(notas[5] == undefined){
    notas[5] = 54;
}

console.log(notas[5]); //undefined
console.log(notas[6]);
console.log(notas[7]);
console.log(notas[8]);
console.log(notas[9]); //10

console.log(notas[5]) == undefined; //true

//Inserindo elementos no final da array

var nomes = ['Paula', 'Maria', 'Julia'];
console.log(nomes);

nomes.push('Vanesssa'); //insere o valor no final do array
console.log(nomes);

// Tamanho do array
console.log(nomes.length); //4
var tam = nomes.length;

// Ordenar os dados de um array
var alunos = ['Vera', 'Lucia', 'Pedro', 'Fernanda', 'Mário', 'Ana', 'Carla'];
//console.log(alunos);

//alunos.sort(); // Ordenando array de string
//console.log(alunos);

var precos = [125.55, 42.27, 546.99, 23.12];
//console.log(precos);

//precos.sort(); // ATENÇÃO ordenadação de floats não funciona assim!
//console.log(precos);
precos.sort(function(a, b) {return a - b;});
//console.log(precos);

var idade = [5, 1, 8, 12, 44, 78];
//console.log(idade);

idade.sort(function(a, b) {return a - b;});
//console.log(idade);

// deletando dados de um array
delete idade[3];
//console.log(idade);

idade[3] = 12;
console.log(idade);

//idade.splice(3, 1); //A partir do indice 3, delete 1 elemento
//console.log(idade);

//idade.splice(3, 0, 56, 89); //A partir do indice 3, não delete nenhum, mas adicione 56,89
//console.log(idade);

//idade.splice(3, 1, 23); // A partir do indice 3, delete 1, e adciona 23
//console.log(idade);
//idade[3]= 23;

// Iterar em um array
for(var i = 0; i < idade.length; i++){
 //   console.log(idade[i]);
}

//removendo elementos dea última posição do array
//idade.pop();//remove e retorna o ultimo elemento
//console.log(idade);

//var ret = idade.pop();
//console.log(ret);
//console.log(idade);

//removendo o primeiro elemento de um array
//idade.shift();//remove e retorna o último elemento de um array
//console.log(idade);

//var ret = idade.shift();
//console.log(ret);
//console.log(idade);

// Inserindo elementos no início de um array
//idade.unshift(99);
//console.log(idade);
//var novo = idade.slice(3);
//console.log(novo);

//var novo = idade.slice(1, 2); //a partir do índice 1, pegue até o índice 2 sem incluí-lo

var pares = [2, 4, 6, 8, 10];
var impares = [1, 3, 5, 7, 9];

var rest = pares.concat(impares); //concatena os dois arrays
//console.log(rest);

rest = impares.concat(pares);
//console.log(rest);

rest.sort(function(a, b){return a - b;});
//console.log(rest);

// 4 x 4

var tabuleiro = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]];

/*
    [
        [1,   2,  3,   4], //linha 0
        [5,   6,  7,   8], //linha 1
        [9,  10, 11,  12], //linha 2
        [13, 14, 15,  16] // linha 3
    ]
*/

console.log(tabuleiro[0][0]); // linha 0 coluna 0 -> 1
console.log(tabuleiro [2][2]);// linha 2, coluna 2 -> 11