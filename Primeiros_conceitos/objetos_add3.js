//exemplo para declarar um objeto
const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"12345678925",
    email:"andre@email.com",
    fone:['151561','2651561']
}

cliente.dependentes = {
    nome:'Sara',
    parentesco:'Filha',
    dataNasc:'20/03/2011'
}

console.log(cliente);

cliente.dependentes.nome = 'Sara Silva';

console.log(cliente);