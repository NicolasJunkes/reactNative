// class ListaConvidados {
//     constructor() {
//         this.convidados = [];
//     }

//     adicionar(nome, idade, cpf) {
//         this.convidados.push({nome: nome, idade: idade, cpf: cpf});
//     }

//     listarConvidados() {
//         console.log(this.convidados);
//     }
// }

// var listaConv = new ListaConvidados();

// document.getElementById("adicionarConvidado").onclick = function() {
//     var elNome = document.getElementById("nome").value;
//     var elIdade = document.getElementById("idade").value;
//     var elCpf = document.getElementById("cpf").value;

//     listaConv.adicionar(elNome, elIdade, elCpf);
//     listaConv.listarConvidados();
// };

// /* ARROW FUNCTIONS */

// // Modo antigo
// var soma1 = function(x, y) {
//     return x + y;
// };

// console.log('Soma1: ', soma1(1, 1));

// // Modo novo
// var mult = x => x * 2;

// var soma2 = (x, y) => x + y;

// console.log('Mult: ', mult(2));
// console.log('Soma2:',soma2(3, 3));

// /* SETANDO VALORES PADRÕES */
// const exp = (x, y = 2) => x * y;
// console.log('Exp: ', exp(2, 8));

// /* DESESTRUTURAÇÃO */
// const convidado = {
//     nome: "Felipe",
//     idade: 37,
//     endereco: { logradouro: "Av X", numero: 399 }
// };

// const {
//     nome,
//     idade,
//     endereco: { numero }
// } = convidado;

// console.log('Convidado:', nome, idade, numero);

// const imprimir = ({ nome, idade }) => {
//     console.log('Imprimir', nome, idade);
// };

// imprimir(convidado);

// /* OPERADORS REST SPREAD */
// REST
// PEGAR O RESTO DAS PROPRIEDADES DE UM OBJETO/ARRAY

// const convidadoRest = { nome: "Nicolas", idade: 21, endereco: "Av X, 39" };
// const { nome, ...rest } = convidadoRest

// console.log(nome);
// console.log(rest);

// const convidados = [
//     { nome: "Felipe", idade: 37, endereco: "Av X, 39" },
//     { nome: "Bruno", idade: 23, endereco: "Av Y, 49" },
//     { nome: "Isabele", idade: 21, endereco: "Av Z, 59" },
//     { nome: "João", idade: 41, endereco: "Av W, 69" }
// ];

// const [felipe, bruno, ...outros] = convidados;

// console.log(felipe);
// console.log(bruno);
// console.log(outros);

// const arr = [1, 2, 3, 4];
// const [a, b, ...resto] = arr;

// console.log(a);
// console.log(b);
// console.log(resto);

// SPREAD
// REPASSA AS PROPRIEDADES PARA OUTRO OBJETO/ARRAY

// const arr1 = [1, 2, 3];
// const arr2 = [4, 5, 6];
// const arr3 = [...arr1, ...arr2];

// console.log(arr3);

// const convidado1 = { nome: "Nicolas", idade: 21, endereco: "Av X, 39" };
// const novoConvidado = {...convidado1, idade: 25};

// console.log(novoConvidado);

/* OBJECTS SHORTS SINTAX */

// const nome = "Nicolas";
// const idade = 21;

// const convidado = {
//     nome,
//     idade,
//     endereco: "Av X, 39" 
// };

// console.log(convidado);

/* ============================WEBPACK==================================== */
// import soma, { algumaOp } from "./matematica/soma";
// import subtracao from "./matematica/subtracao";

// console.log(soma(1, 2));
// console.log(subtracao(1, 2));

/* =============================ASYNC/AWAIT=============================== */
const minhaPromise = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("PRONTO");
        }, 2000);
    });
};

console.log("Start");

minhaPromise().then(res => {
    console.log("Exec1 ", res);
});

async function outraPromise() {
    const res = await minhaPromise();
    console.log("Exec2 ", res);    
}
outraPromise();

const algumaPromise = async () => {
    const res = await minhaPromise();
    console.log("Exec3 ", res);
};
algumaPromise();

console.log("End");