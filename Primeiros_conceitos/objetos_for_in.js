//exemplo para declarar um objeto
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


let relatorio = '';

//For...In
for(let info in cliente){
    if(typeof cliente[info] === "object")
        continue
    else if (typeof cliente[info] === 'function')
     continue
    else
                        //keys                values
        relatorio += `  ${info} ==> ${cliente[info]}`
}

console.log(relatorio);