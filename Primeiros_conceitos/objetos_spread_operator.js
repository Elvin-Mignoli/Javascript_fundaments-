//exemplo para declarar um objeto
const cliente = [
    {
    nome: "Andre",
    idade:36,
    cpf:"12345678925",
    email:"andre@email.com",
    fone:['151561','2651561'],
    dependentes:[{
        nome: 'Sara Silva',
        parentesco: 'Filha',
        dataNasc: "20/03/2011"}
    ,
    {    nome: "Samia Maria",
        parentesco: "Filha",
        dataNasc: "04/01/2014"}]
},
{
nome: "Pedro",
    idade:36,
    cpf:"12345678925",
    email:"pedro@email.com",
    fone:['151561','2651561'],
    dependentes:[{
        nome: 'Maria Silva',
        parentesco: 'Filha',
        dataNasc: "20/03/2011"}
    ,
    {    nome: "Samara Maria",
        parentesco: "Filha",
        dataNasc: "04/01/2014"}],
    
}]


const listaDependentes = [...cliente[0].dependentes,...cliente[1].dependentes]

console.table(listaDependentes);