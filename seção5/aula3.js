var cursos = [
    'Programação para leigos',
    'algoritimos e lógica de programação',
    'programação em C',
    'Programação em Python',
    'Banco de Dados',
    'Programação Web com Django Framework',
    'Programação em JavaScript',
];

console.log(cursos);
console.log(cursos.length);

//definir uma função
function imprimir(curso, indice){
    console.log(indice + ' - ' + curso);
}

// para cada
//cursos.forEach(imprimir);

//utilização de uma função anônima (lambda/callback) e tamplate string
cursos.forEach(function(curso, indice){
    console.log('${indice} - ${curso}');
});

for(var i = 0; i < cursos.length; i++){
    console.log(i + ' - ' + cursos[i]);
}