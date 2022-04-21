//exeplo para declarar um objeto
const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"12345678925",
    email:"andre@email.com",
    fone:['151561','2651561'],
    dependentes:[{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: "20/03/2011"
    }]
}

cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "Filha",
    dataNasc: "04/01/2014"
})

let data = new Date(cliente.dependentes[1].dataNasc).getFullYear()
// console.log(data)

//console.log(date.parse(cliente.dependentes[0].dataNasc))

console.log(cliente.dependentes.filter(dependente => new Date(dependente.dataNasc).getFullYear() > 2011));