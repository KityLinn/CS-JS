const loadingIndic = '<span class="loader"></span>';
const errorMsg = "Error 404";
export const main = document.querySelector('main');

export const doREquest = (url, renderFunction) => {
    try {
        let res;
        if (!res) {
            main.innerHTML = loadingIndic;
          }
          setTimeout (async() =>{
          main.innerHTML = '';
          res = await fetch(url);
          const data = await res.json();
          const dataPoints = data.data;
          const card = document.createElement('div');
          card.classList.add('card');
          renderFunction(dataPoints);   
    },4000 )
} catch(error) {
    return main.innerHTML = errorMsg
}};