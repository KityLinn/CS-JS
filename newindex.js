import { doREquest, main} from "./exports.js";
const monsters_url = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";


const renderAll = (all) => {
    all.forEach(allItems => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="creature"> 
        <h1>Name: ${allItems.name}</h1>
        <p>Locations: ${allItems.common_locations}</p>
        <img src="${allItems.image}" alt="${allItems.name}"> 
        <a href="/details.html?id=${allItems.id}">Click for details</a>
        </div>`;
        main.appendChild(card);
});
};

doREquest (monsters_url, renderAll);