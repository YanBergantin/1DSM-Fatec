console.log("Exercício 2");
const txtToArray = require('./loadLivros'); 

const livros = txtToArray();

const tituloLivro = process.argv[2];

if (!tituloLivro) {
    console.error('É necessário fornecer o título do livro');
    process.exit(1);
}

const disciplinasLivro = [];

for (let i = 0; i < livros.length; i++) {
    if (livros[i].titulo.trim().toLowerCase() === tituloLivro.trim().toLowerCase()) {
        disciplinasLivro.push(livros[i].disciplina);
    }
}

if (disciplinasLivro.length > 0) {    
    for (let i = 0; i < disciplinasLivro.length; i++) {
        console.log(` Disciplina:  ${disciplinasLivro[i]}`);
    }
} else {
    console.log(`Não existem disciplinas que utilizam o livro "${tituloLivro}".`);
}
