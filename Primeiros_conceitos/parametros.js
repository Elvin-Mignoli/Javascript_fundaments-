
function nomeIdade(nome,idade){
    return `meu nome é ${nome} e minha idade é ${idade}`;
}
console.log(nomeIdade('Elvin',29));


function soma(numero1,numero2){
    return numero1 + numero2;
}

function multiplicar(numero1,numero2){
    return numero1 * numero2;
}

console.log(multiplicar(soma(4,5),soma(3,3)));


function cumprimentar(){
    return 'Oi gente!'
   }
   
   function cumprimentaPessoa(nomePessoa) {
    console.log(`${cumprimentar()} Meu nome é ${nomePessoa}`)
   }
   
   cumprimentaPessoa('Paula') // “Oi gente! Meu nome é Paula”

   