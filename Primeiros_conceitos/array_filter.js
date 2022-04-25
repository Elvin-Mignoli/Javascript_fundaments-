const nomes = ['Ana','Marcos','Maria','Mauro'];

const notas = [7,4,8,7];

const reprovados = nomes.filter((_,indice) => notas[indice] < 5)

console.log(`reprovados: ${reprovados}`);