// abstract common file
export default {
  setHtml(newHtml, elementId) {
    document.getElementById(elementId).innerHTML = newHtml;
  },

  renderList(list) {
    var tempHtml = "";
    list.forEach(listItem => {
      tempHtml+=`<div>${listItem.dataIWantToDisplay}</div>`
    });
    setHtml(tempHtml, 'main');
  },

  renderDetails(data) {
    var html = `<div>${data.dataIWantToDisplay}</div>` 
    setHtml(html, 'main');
  },

  doRequest(url, renderFunction) {
    fetch(url).then(response => {
      if (response.status==200) {
        renderFunction(response.json())
      } else {
        //status not OK
        this.showError(response.statusText)
      }
    }).catch(error => {
      //network errors
      this.showError(error) 
    });
  },

  showError(text) {
    setHtml(`<h1>${text}</h1>`);
  },

  showLoading(text) {
    setHtml(`<h1>${text}</h1>`);
  }
}