
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
        dataNasc: "20/03/2011"}
    ,
    {    nome: "Samia Maria",
        parentesco: "Filha",
        dataNasc: "04/01/2014"}],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;
    },
    depositar2: valor => cliente.saldo += valor
}


const propsClientes = Object.keys(cliente);

//console.log(propsClientes);

function oferecerSeguro(obj){
    const propsClientes = Object.keys(obj);
    if(propsClientes.includes("dependentes")) {
        console.log(`Oferta de seguro de vida para ${obj.nome}`);
    }
}

oferecerSeguro(cliente); 

//console.log(Object.values(cliente));

console.log(Object.entries(cliente));