//Arrow function
const apresentarArrow = nome => `Meu nome é ${nome}`;
const soma = (num1, num2) => num1 + num2;

//Arrow function com + de 1 linha de instrução
const somaNumeroPequenos =  (num1,num2) => {
    if(num1 > num2){
        return "Número 1 é maior";
    }else {
        return "Número 2 é maior"
    }
}

//Hoisting: arrow function se comporta como express