const url = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
const main = document.querySelector('main')

const getArticles = async () => {
    try {
      let res; 
        if (!res) {
          main.innerHTML = '<span class="loader"></span>';
        }
      setTimeout (async() =>{
      main.innerHTML = '';
      res = await fetch(url);
      const data = await res.json();
      data.data.forEach((element) => {
        const {common_locations, id, name, image} = element;
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="creature"> 
        <h1>Name: ${name}</h1>
        <p>Locations: ${common_locations}</p>
        <img src="${image}" alt="${name}"> 
        <a href="/details.html?id=${id}">Click for details</a>
        </div>`;
    main.appendChild(card);
      })
      },4000);
    } catch (err) {
      return err.response;
    }
  };
getArticles()
