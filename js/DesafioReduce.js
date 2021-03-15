/* Adicione em nosso pequeno sistema de controle de convidados as funções de filtro para barrar as pessoas com menos de 18 anos e mais.

Que possa permitir agrupar entre gêneros para melhorar a organização de cobrança e ordenar por nome, já que no futuro evento o cliente comentou que "mulher paga meia" e que precisa estar ordenado para conferência mais rápida de nomes.

Para organizar os nomes usar o método nomes.sort() */

var convidados = [
    { nome: 'Nicolas', idade: 18, genero: 'M', vip: true },
    { nome: 'Isaque', idade: 18, genero: 'M', vip: true },
    { nome: 'Lucas', idade: 18, genero: 'M', vip: false },
    { nome: 'Júlia', idade: 18, genero: 'F', vip: true }
]

Array.prototype.groupBy = function groupBy(array, prop) {
    var value = this.reduce(function(total, item) {
        var key = item[prop]; //item.nome (Nicolas)
        total[key] = (total[key] || []).concat(item);

        return total;
    }, {});

    return value;
}

var filtrarIdades = convidados.filter(function(item) {
    return item.idade == 18;
}).sort(function(item) {
    return item.nome;
}).groupBy('genero');

console.log(filtrarIdades);