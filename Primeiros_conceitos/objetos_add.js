//exemplo para declarar um objeto
const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"12345678925",
    email:"andre@email.com"
}

console.log(cliente);

cliente.fone = '985792354';

console.log(cliente); 


const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
   }

delete objPersonagem.aliado
delete objPersonagem["status"]

console.log(objPersonagem.aliado) //undefined
console.log(objPersonagem.status) //undefined

const delProp = delete objPersonagem.aliado
const delPropInexistente = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true