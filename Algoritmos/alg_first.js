const livros = require('./alg_list');

function menorValor(arrProdutos, posicaoInicial){
 
    let maisBarato = posicaoInicial;

    for(let atual = posicaoInicial; atual < livros.length; atual++){
        //código
        if(arrProdutos[atual].preco  < arrProdutos[maisBarato].preco){
            maisBarato = atual;
        }
    }
    return maisBarato
}

module.exports = menorValor;
//