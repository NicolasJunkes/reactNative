var funcionario = {
    nome: "Nicolas",
    idade: 21,
    numRegistro: "12345B",
    departamento: "TI",
    eventos: [
        { eventos: 'Faltou', data: '18/05/2021' },
        { eventos: 'Falou bravo com o chefe', data: '18/06/2021' },
    ],
    detalhes: {
        hobies: ['Fotografia', 'jiu-jistsu'],
    },
    horarios: [],
    registrarEntrada: function (data) {
        this.horarios.push({ data: data, evento: 'Entrada' })
        console.log("Entrada às " + data + " - " + this.numRegistro);
    },
    registrarSaida: function (data) {
        this.horarios.push({ data: data, evento: 'Saída' })
        console.log("Entradas às " + data + " - " + this.numRegistro);
    }
}

funcionario.registrarEntrada('06/06/2021')
funcionario.registrarSaida('07/06/2021')