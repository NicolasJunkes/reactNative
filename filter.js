/* Filtro de números */
var numeros = [10, 18, 1, 15]

var novosNumeros = numeros.filter(function(item){
    return item > 10
});
console.log(novosNumeros);

/* Filtro de Nomes */
var nomes = ["Bruno", "Zezinho", "Fulano", "Douglas"];

var filtrarNomes = nomes.filter(function(item) {
    return item.charAt(0) == "Z"
})

console.log(filtrarNomes);


/* Filtro de números ímapres e pares */
var numeros = [10, 18, 1, 15, 2, 12, 21, 33, 100];

var numerosPares = numeros.filter(function(item){
    return !(item % 2);
});

var numerosImpares = numeros.filter(function(item){
    return item % 2;
})

console.log(numerosPares);
console.log(numerosImpares);


/* Filtro de Objetos Filmes */
var filmes = [
    { titulo: 'Titanic', duracao: 195, nota: 7.5 }, 
    { titulo: 'The Avengers', duracao: 203, nota: 9.5 },
    { titulo: 'Mr Bean', duracao: 90, nota: 6.5 }    
]

var notaCorte = 8;

var filmesBons = filmes.filter(function(item){
    return item.nota >= notaCorte;
})

var filmesRuins = filmes.filter(function(item){
    return item.nota < notaCorte;
})

console.log(filmesBons);
console.log(filmesRuins);

/* Filtro de Objeto Lista de convidados */
var convidados = [
    { nome: 'Daniel', vip: true, idade: 21 },
    { nome: 'Gabrie', vip: true, idade: 54 },
    { nome: 'Felipe', vip: false, idade: 37 }
]

var filtraVip = convidados.filter(function(item){
    return item.vip;
})

console.log(filtraVip);