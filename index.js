const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Bruno", nota: 5.0 },
  { nome: "Carla", nota: 6.0 },
  { nome: "Diego", nota: 4.5 },
  { nome: "Elena", nota: 9.2 },
];

function alunosAprovados(lista) {
  return lista.filter((aluno) => aluno.nota >= 6);
}

console.log(alunosAprovados(alunos));
