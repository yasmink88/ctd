function parrot() {
  for (let i = 0; i < 5; i++) {
    console.log("Hello World!");
  }
}

parrot();

function countOdd() {
  for (let i = 0; i < 10; i++) {
    if (i % 2 != 0) {
      console.log(i);
    }
  }
}

countOdd();

//tabuada
function timesTable() {
  for (let i = 1; i <= 5; i++) {
    for (let m = 1; m <= 10; m++) {
      console.log(`${i} * ${m} = ` + i * m);
    }
  }
}

timesTable();

//Exercício Praticando com While
function oddNumbers() {
  let i = 1;
  while (i < 100) {
    i++
    if(i % 2 != 0) {
      console.log(i)
  }
}
}

oddNumbers();

function evenNumbers() {
    let i = 1;
    while (i <= 100) {
      i++
      if(i % 2 == 0) {
        console.log(i)
    }
  }
  }
  
  evenNumbers();
  
function oddEven(num) {
    let i = 1;
    while (i <= num) {
        console.log(i)
        i++
    } 
} 

oddEven(5)

function avgGrade(qtStudents, grade) {
    let sum = 0
    let avgTotal = 0

    while (grade.length < qtStudents) {
        sum += grade[i]
    }

    return  avgTotal = sum / qtStudents
}

