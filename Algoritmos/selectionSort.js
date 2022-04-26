const livros = require('./alg_list');
const menorValor = require('./alg_first');

for(let atual = 0; atual < livros.length; atual++){
    let menor = menorValor(livros,atual)

    let livroAtual = livros[atual];
    let livroMenorPreco = livros[menor];

    livros[atual] = livroMenorPreco;
    livros[menor] = livroAtual;
} 

console.table(livros);