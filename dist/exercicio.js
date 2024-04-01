"use strict";

// Array de objetos com nome e nota dos alunos

var alunos = [{
  nome: 'João',
  nota: 10
}, {
  nome: 'Maria',
  nota: 8
}, {
  nome: 'Gustavo',
  nota: 6
}, {
  nome: 'Julia',
  nota: 5
}, {
  nome: 'Arthur',
  nota: 3
}, {
  nome: 'Bruno',
  nota: 0
}];

// Função para retornar apenas os alunos com nota maior ou igual a 6

function alunosAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
}
var aprovados = alunosAprovados(alunos);
console.log(aprovados);