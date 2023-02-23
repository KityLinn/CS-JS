const main = document.querySelector('main');
const monsters_url = "https://botw-compendium.herokuapp.com/api/v2/category/monsters";
const loadingIndic = '<span class="loader"></span>';
const errorMsg = "Error 404"
const details = 'https://botw-compendium.herokuapp.com/api/v2/entry/' + id;

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

doREquest