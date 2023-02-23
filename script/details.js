const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get ('id');
const main = document.querySelector('main');


const getDetails = async () => {
    try {
    let res;
        if (!res) {
          main.innerHTML = '<span class="loader"></span>';
        }
      setTimeout (async() =>{
      main.innerHTML = '';
      res = await fetch ('https://botw-compendium.herokuapp.com/api/v2/entry/' + id);
      const data = await res.json();
      const monster = data.data;
      const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="creature"> 
        <h1>Name: ${monster.name}</h1>
        <h3>Description: ${monster.description}</h3>
        <p>Drops: ${monster.drops}</p>
        <p>Locations: ${monster.common_locations}</p>
        <img src="${monster.image}" alt="${monster.name}"> 
        </div>`;
    main.appendChild(card);
    document.title = monster.name;
  },4000);
} catch (err) {
    return err.response;
  }
};

getDetails()

