const jsonData = `
{
  "squadName": "Super hero squad",
  "homeTown": "Metro City",
  "formed": 2016,
  "secretBase": "Super tower",
  "active": true,
  "members": [
    {
      "name": "Molecule Man",
      "age": 29,
      "secretIdentity": "Dan Jukes",
      "powers": ["Radiation resistance", "Turning tiny", "Radiation blast"]
    },
    {
      "name": "Fire woman",
      "age": 23,
      "secretIdentity": "Jessica Parker",
      "powers": ["Fire Creation", "Controlling fire"]
    },
    {
      "name": "Madame Uppercut",
      "age": 39,
      "secretIdentity": "Jane Wilson",
      "powers": [
        "Million tonne punch",
        "Damage resistance",
        "Superhuman reflexes"
      ]
    },
    {
      "name": "Eternal Flame",
      "age": 1000000,
      "secretIdentity": "Unknown",
      "powers": [
        "Immortality",
        "Heat Immunity",
        "Inferno",
        "Teleportation",
        "Interdimensional travel"
      ]
    }
  ]
}
`;
const addBtn = document.querySelector("form button");
let membrosArray = [];
let membrosList = document.querySelector("#membros");
let membrosInput = document.querySelector("#superhero");

//Percorra o JSON e insera os nomes dos membros na lista html
function percorrerMembros() {
  //escreva a lógica
  let jsonTojs = JSON.parse(jsonData);
  let membros = jsonTojs.members;

  /* 
  for (const membro of membros) {
    console.log(membro.name)
    membrosList.innerHTML += `
      <li>${membro.name}</li>
    
    `
    
  } */
  membros.forEach((membro) => {
    membrosArray.push(membro.name);

    membrosList.innerHTML += `
      <li>${membro.name}</li>
    `;
  });
}

let heroes = localStorage.getItem("superheroes")

window.onload = () => {
  percorrerMembros()
  heroes.forEach(hero => {
    membrosList.innerHTML += `
    <li>${hero}</li>
  
  `
  });
}

heroes = heroes ? heroes.split(",") : []

addBtn.addEventListener("click", (event) => {
  event.preventDefault();

  let superhero = membrosInput.value;

  if(heroes.includes(superhero)) {
    alert("Superhero already exists")
  } else {

    heroes.push(superhero)
    localStorage.setItem("superheroes", heroes.toString())

    membrosList.innerHTML += `
    <li>${superhero}</li>
  
  `
   
    console.log(heroes)
  }
});
