const monsters_url = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
const loadingIndic = '<span class="loader"></span>';
const errorMsg = "Error 404"

const renderAll = (all) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML =`
    <div class="creature"> 
    <h1>Name: ${all.name}</h1>
    <p>Locations: ${all.common_locations}</p>
    <img src="${all.image}" alt="${all.name}"> 
    <a href="/details.html?id=${all.id}">Click for details</a>
    </div>`;
};

const renderDetails = (details) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.innerHTML = `
    <div class="creature"> 
    <h1>Name: ${details.name}</h1>
    <h3>Description: ${details.description}</h3>
    <p>Drops: ${details.drops}</p>
    <p>Locations: ${details.common_locations}</p>
    <img src="${details.image}" alt="${details.name}"> 
    </div>`;
};

const doREquest = (url, renderFunction) => {
    try {
        let res;
        if (!res) {
            main.innerHTML = loadingIndic;
          }
          setTimeout (async() =>{
          main.innerHTML = '';
          res = await fetch(url);
          renderFunction(res.json());
    },4000 )
} catch(error) {
    return main.innerHTML = errorMsg

}};
