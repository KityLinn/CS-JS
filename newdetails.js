import { doREquest, main} from "./exports.js";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get ('id');
const monster = ('https://botw-compendium.herokuapp.com/api/v2/entry/' + id);


const renderMonster = (monsteri) => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="creature"> 
        <h1>Name: ${monsteri.name}</h1>
        <h3>Description: ${monsteri.description}</h3>
        <p>Drops: ${monsteri.drops}</p>
        <p>Locations: ${monsteri.common_locations}</p>
        <img src="${monsteri.image}" alt="${monsteri.name}"> 
        </div>`;
        main.appendChild(card); 
};

doREquest (monster, renderMonster);