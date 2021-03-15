/* Agregação */
var valores = [1.5, 2, 4, 10]; //17.5

var calc = function(total, item, indice) {
    console.log(`T: ${total} I: ${indice} I: ${item}`);
    return total + item;
}

var somatoria = valores.reduce(calc);
console.log(somatoria);

/* Calculo de média */
var valores = [1.5, 2, 4, 10];

var media = valores.reduce(function(total, item, indice, array) {
    total = total + item;

    if(indice == array.length - 1){
        return total / array.length;
    }
    return total;
});
console.log(media);