/* Filtrando os valores de um array e agrupando eles conforme tipo de dado */

/* Carros */
var carros = [
    { marca: 'Audi', cor: 'preto' },
    { marca: 'Audi', cor: 'branco' },
    { marca: 'Ferrari', cor: 'vermelho' },
    { marca: 'Ford', cor: 'branco' },
    { marca: 'Peugot', cor: 'branco' }];

function groupBy(array, prop) {
    var value = array.reduce(function (total, item) {
        var key = item[prop]; //item.marca (audi)

        total[key] = (total[key] || []).concat(item);

        return total;
    }, {});
    return value;
}

var agrupados = groupBy(carros, 'marca');
console.log(agrupados);

/* Produtos */
var produtos = [
    {id: 123, nome: 'Camiseta', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 125, nome: 'Shorts', cor: 'preto', tamanho: 'G', categoria: 'Vestuário'},
    {id: 456, nome: 'Tênis', cor: 'preto', tamanho: '42', categoria: 'Vestuário'},
    {id: 789, nome: 'Bola', cor: 'verde', tamanho: 'Único', categoria: 'Esporte'}
]

Array.prototype.groupBy = function groupBy(array, prop) {
    var value = this.reduce(function(total, item) {
        var key = item[prop]; //item.marca (audi)
        total[key] = (total[key] || []).concat(item);
        
        return total;
    }, {});
    
    return value;
}

var produtosFiltrados = produtos.filter(function(item) {
    return item.cor == 'preto';
}).filter(function(item) {
    return item.tamanho == 'G';
}).groupBy('categoria');

console.log(produtosFiltrados);