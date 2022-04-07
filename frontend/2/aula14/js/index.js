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

//Percorra o JSON e insera os nomes dos membros na lista html
function percorrerMembros() {
  //escreva a lógica
  let jsonTojs = JSON.parse(jsonData)
  let membros = jsonTojs.members
  let membrosList = document.querySelector("#membros")

/* 
  for (const membro of membros) {
    console.log(membro.name)
    membrosList.innerHTML += `
      <li>${membro.name}</li>
    
    `
    
  } */
  membros.forEach(membro => {

    membrosList.innerHTML += `
      <li>${membro.name}</li>
    
    `
     console.log(membro.name)
  });

}
percorrerMembros();