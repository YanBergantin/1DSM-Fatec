console.log("Exercício 4");
const txtToArray = require('./loadLivros'); 

const livros = txtToArray();

let tituloMaisExtenso = null;

for (let i = 0; i < livros.length; i++) {
    if (!tituloMaisExtenso || livros[i].titulo.length > tituloMaisExtenso.titulo.length) {
        tituloMaisExtenso = livros[i];
    }
}

if (tituloMaisExtenso) {

    console.log(`
    Disciplina: ${tituloMaisExtenso.disciplina}
    Título: ${tituloMaisExtenso.titulo}
    Autores: ${tituloMaisExtenso.autor}
    Editora: ${tituloMaisExtenso.editora}
    Ano: ${tituloMaisExtenso.ano}
    `);
} else {
    console.log("Nenhum livro encontrado.");
}
