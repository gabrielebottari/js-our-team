/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

MILESTONE 0:
Creare l'array di oggetti con le informazioni fornite.

MILESTONE 1:
Stampare su console, per ogni membro del team, le informazioni di nome, ruolo e la stringa della foto

MILESTONE 2:
Stampare le stesse informazioni su DOM sottoforma di stringhe
*/

//MILESTONE 0: Creo l'array di oggetti con le informazioni fornite
const teamMembers = [
    {
      name: "Wayne Barnett",
      role: "Founder & CEO",
      image: "wayne-barnett-founder-ceo.jpg"
    },

    {
      name: "Angela Caroll",
      role: "Chief Editor",
      image: "angela-caroll-chief-editor.jpg"
    },

    {
      name: "Walter Gordon",
      role: "Office Manager",
      image: "walter-gordon-office-manager.jpg"
    },

    {
      name: "Angela Lopez",
      role: "Social Media Manager",
      image: "angela-lopez-social-media-manager.jpg"
    },

    {
      name: "Scott Estrada",
      role: "Developer",
      image: "scott-estrada-developer.jpg"
    },

    {
      name: "Barbara Ramos",
      role: "Graphic Designer",
      image: "barbara-ramos-graphic-designer.jpg"
    }
  ];

//MILESTONE 1: Stampo su console il nome, ruolo e la stringa della foto per ogni membro del team utilizzando un ciclo for
for (let i = 0; i < teamMembers.length; i++) {

    console.log("Name: " + teamMembers[i].name);
    console.log("Role: " + teamMembers[i].role);
    console.log("Image: " + teamMembers[i].image);

}

/*
//MILESTONE 2: Stampo sul DOM sottoforma di stringhe utilizzando un ciclo for
const teamList = document.getElementById("team-list");

for (let i = 0; i < teamMembers.length; i++) {

  const memberInfo = document.createElement("p");

  memberInfo.textContent = `Name: ${teamMembers[i].name}, Role: ${teamMembers[i].role}, Image: ${teamMembers[i].image}`;

  teamList.appendChild(memberInfo);

}
*/

/*
BONUS 1: Trasformare la stringa foto in una immagine effettiva

BONUS 2: Organizzare i singoli membri in card/schede
*/

//inizializzo variabile per rappresentare il contenuto delle card
let teamCard = '';

//ciclo for con array e per ogni i dell'array creo un div con un img nell'ordine corrispondente
for (let i = 0; i < teamMembers.length; i++) {

    teamCard += 
    `
        <div class="card text-center p-0 border-primary-subtle">
            <img class="card-img-top" src="./img/${teamMembers[i].image}" alt="Image ${i+1}">
                <div class="card-body">
                    <h4 class="card-title">${teamMembers[i].name}</h4>
                    <p class="card-text">${teamMembers[i].role}</p>
                </div>
        </div>
    `; 
};

//inserisco nell'html il codice js creato con il ciclo for
const itemsSlider = document.querySelector('.cardTeam').innerHTML = teamCard;