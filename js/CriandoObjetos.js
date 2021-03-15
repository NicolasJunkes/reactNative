var pessoa1 = {
    nome: 'Nicolas',
    idade: 21
}

var pessoa2 = {
    nome: 'Lucas',
    idade: 21
}

pessoa1 != pessoa2; //true

pessoa3 = pessoa2; //reference

var pessoa4 = Object.create(pessoa2); // Cria um novo objeto copiando os dados do obejeto de paramêtro

/* Desafio

Criar um método dentro do sistema de controle de convidados para que possa clonar objetos aproveitando os dados de outro convidado. */

var convidados = {
     id: 1, nome: 'Nicolas', idade: 18, genero: 'M', vip: true
    /* { id: 2, nome: 'Isaque', idade: 18, genero: 'M', vip: true },
    { id: 3, nome: 'Lucas', idade: 18, genero: 'M', vip: false },
    { id: 4, nome: 'Júlia', idade: 18, genero: 'F', vip: true } */
}

var convidadoClonado = Object.create(convidados)

    // convidadoClonado = function clonarConvidado(convidado) {
    //     this.convidados.push(Object.create(this.convidados.id));
    // }

console.log(convidadoClonado);