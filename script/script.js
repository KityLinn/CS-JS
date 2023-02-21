const url = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
const main = document.querySelector('main')

const getArticles = async () => {
    try {
      let res; 
      setTimeout(() => {
        if (!res) {
          main.innerHTML = '<span class="loader"></span>';
        }
      }, 1000);
      res = await fetch(url);
      const data = await res.json();
      data.data.forEach((element) => {
        const {category, common_locations, description, drops, id, name, image} = element;
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div class="creature"> 
        <h1>Name: ${name}</h1>
        <h3>Description: ${description}</h3>
        <p>Locations: ${common_locations}</p>
        <img src="${image}" alt="${name}"> 
        <a href="/details.html?id=${id}">Click for details</a>
        </div>`;
    main.appendChild(card);
      });
    } catch (err) {
      return err.response;
    }
  };
getArticles()
