function somar(n1, n2){
    return n1 + n2;
}

let res = somar(4, 6);
//console.log(res);

//console.log(somar(10, 5));
// exemplo 1

const executar = somar;

console.log(executar(8, 7));

// exemplo 2

function subtrair (n1, n2){
    return n1 - n2;
}

function faz_algo(n1, n2, xuxa){
    return xuxa(n1, n2);
}

//console.log(faz_algo(5, 5, somar));
//console.log(faz_algo(8, 3, subtrair));
// exemplo 3

function outra(z){
    return z;
}

const ret = outra(subtrair);
console.log(ret(8, 2));

/*cidações de primeira classe
first-class citizens
higher-order function
*/

function mensagem(){
    console.log('Evolua seu lado geek');
}

let reto = mensagem();
console.log(reto);

let valores = (1, 3.4, true, somar);

for(let i = 0; i < valores.length; i++){
    console.log(typeof(valores[i]));
}