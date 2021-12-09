function NovoAluno(nome, faltas, notas) {
    this.nome = nome;
    this.faltas = faltas;
    this.notas = notas;
    this.calcularMedia = function () {
      let avgNotas = 0;
      let sum = this.notas.reduce((acc, num) => acc + num, 0);
      return (avgNotas = sum / this.notas.length);
    };
  
    this.addFaltas = function () {
      return this.faltas += 1;
    };
  }

  module.exports = NovoAluno