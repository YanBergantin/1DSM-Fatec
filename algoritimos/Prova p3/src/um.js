console.log("Exercício 1");
const txtToArray = require("./loadLivros");

const livros = txtToArray();

const disciplina = process.argv[2];

if (!disciplina) {
  console.error(
    "Erro: Por favor, forneça o nome da disciplina como argumento."
  );
  process.exit(1);
}

const livrosDaDisciplina = [];

for (let i = 0; i < livros.length; i++) {
  if (
    livros[i].disciplina.trim().toLowerCase() ===
    disciplina.trim().toLowerCase()
  ) {
    livrosDaDisciplina.push(livros[i]);
  }
}

if (livrosDaDisciplina.length > 0) {
  console.log(`Livros de ${disciplina}:`);

  for (let i = 0; i < livrosDaDisciplina.length; i++) {
    console.log(` 
    Disciplina: ${livrosDaDisciplina[i].disciplina}
    Título: ${livrosDaDisciplina[i].titulo}
    Autores: ${livrosDaDisciplina[i].autor}
    Editora: ${livrosDaDisciplina[i].editora}
    Ano: ${livrosDaDisciplina[i].ano}
`);
  }
} else {
  console.log(`Não existem livros da disciplina "${disciplina}"`);
}