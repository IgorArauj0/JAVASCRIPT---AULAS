let alunos = ["Ana", "Pedro", "Carlos"];

console.log(alunos[0]); // Ana

alunos.push("Maria");

console.log(alunos.length); // 4

alunos.forEach(function(aluno) {
  console.log(aluno);
});