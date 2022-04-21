//método JSON.stringify() converte javascript em JSON
const jsonLivro = JSON.stringify({
    id: 50,
    titulo: "Primeiros Passos com NodeJS",
    autor: "João Rubens",
    categoria: "programação",
    versoes: ["ebook", "impresso"]
   })
   
   console.log(jsonLivro)

   //Método JSON.parse() converte JSON para um objeto Javascript
   const objLivro = JSON.parse(jsonLivro)
console.log(objLivro)