console.log("Exercício 3");
const txtToArray = require('./loadLivros');

const livros = txtToArray();

const parteNomeAutor = process.argv[2];

if (!parteNomeAutor) {
    console.error('É necessário fornecer o nome do autor');
    process.exit(1);
}

const livrosAutor = [];

for (let i = 0; i < livros.length; i++) {
    if (livros[i].autor.toLowerCase().includes(parteNomeAutor.trim().toLowerCase())) {
        livrosAutor.push(livros[i]);
    }
}

if (livrosAutor.length > 0) {
    console.log(`Quantidade de títulos encontrados: ${livrosAutor.length}`);
    console.log(`Livros do autor que contém "${parteNomeAutor}" no nome:`);
   
    for (let i = 0; i < livrosAutor.length; i++) {
        const livro = livrosAutor[i];
        console.log(`
    Título: ${livro.titulo}
    Autores: ${livro.autor}
    Editora: ${livro.editora}
    Ano: ${livro.ano}
`);
    }
} else {
    console.log(`Não existe livros do autor: "${parteNomeAutor}".`);
}