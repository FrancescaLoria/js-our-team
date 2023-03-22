// Creare l’array di oggetti con le informazioni fornite.

const workersArray = [
  {
    nome: "Wayne Barnett",
    ruolo: "Founder & CEO",
    foto: "wayne-barnett-founder-ceo.jpg",
  },

  {
    nome: "Angela Caroll",
    ruolo: "Chief Editor",
    foto: "angela-caroll-chief-editor.jpg",
  },

  {
    nome: "Walter Gordon",
    ruolo: "Office Manager",
    foto: "walter-gordon-office-manager.jpg",
  },

  {
    nome: "Angela Lopez",
    ruolo: "Social Media Manager",
    foto: "angela-lopez-social-media-manager.jpg",
  },

  {
    nome: "Scott Estrada",
    ruolo: "Developer",
    foto: "scott-estrada-developer.jpg",
  },

  {
    nome: "Barbara Ramos",
    ruolo: "Graphic Designer",
    foto: "barbara-ramos-graphic-designer.jpg",
  },
];

console.log(workersArray);

// Stampare su console le informazioni di nome, ruolo e la stringa della foto
// Stampare le stesse informazioni su DOM sottoforma di stringhe
const workesDom = document.querySelector("ul");
for (let i = 0; i < workersArray.length; i++) {
  let currWorkes = workersArray[i];
  console.log(currWorkes.nome, currWorkes.ruolo, currWorkes.foto);
  workesDom.innerHTML += `<li>${currWorkes.nome}</li>
  <li>${currWorkes.ruolo}</li>
  <li><img src= "img/${currWorkes.foto}"</li>`;
}
