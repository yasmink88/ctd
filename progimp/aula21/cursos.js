const alunos = require('./alunos') 
const novoAluno = require("./checkpoint-iii");

let curso = {
  nome: "Programação Imperativa",
  notaAprovacao: 8,
  maxFaltas: 3,
  listaAlunos: alunos,
  addAlunos: function (nome, faltas, notas) {
    let newAluno = new novoAluno(nome, faltas, notas);
    this.listaAlunos.push(newAluno);
  },
  approvedOrNot: function (aluno) {
    let percentage = (this.notaAprovacao * 10) / 100;

    for (let i = 0; i < this.listaAlunos.length; i++) {
        if (this.listaAlunos[i].nome === aluno) {

            if (this.listaAlunos[i].calcularMedia() >= this.notaAprovacao && this.listaAlunos[i].faltas < this.maxFaltas) {
                return true;

              } else if (this.listaAlunos[i].faltas == this.maxFaltas &&
                this.listaAlunos[i].calcularMedia() > this.notaAprovacao + percentage) {
                return true;

              } else {
                return false;
              }

        }
    }
  },
  resultadoFinal: function() {
      let array = []

      for(let i = 0; i < this.listaAlunos.length; i++) {
          array.push(this.approvedOrNot(this.listaAlunos[i].nome))
            }
            return array
  }
  
};



console.log(curso.approvedOrNot("Sandyel"));
console.log(curso.approvedOrNot("Yasmin"));

curso.addAlunos("Roberto", 0, [9, 10, 8, 7]);

console.log(curso.resultadoFinal())
