function Cliente(nome,cpf,email,saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){this.saldo += valor};
}

function ClientePoupanca(nome,cpf,email,saldo, saldoPoup){
    Cliente.call(this,nome,cpf,email,saldo);
    this.saldoPoup = saldoPoup;
}

const ju = new ClientePoupanca('Ju','12315646','ju@email.com',100,200);

console.log(ju);

ClientePoupanca.prototype.depositarPoup = function(valor){this.saldoPoup += valor};

ju.depositarPoup(300);

console.log(ju.saldoPoup);


///
const catalogo = {
    "editora": "Casa do Código",
    "catalogo": [
    {
      "id": 50,
      "titulo": "Primeiros Passos com NodeJS",
      "autor": "João Rubens",
      "categoria": "programação",
      "versoes": ["ebook", "impresso"]
    }
   ]}

   console.log(Object.getOwnPropertyDescriptor(catalogo, "editora"))