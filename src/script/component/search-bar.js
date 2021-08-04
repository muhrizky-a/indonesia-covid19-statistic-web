class SearchBar extends HTMLElement {
 
    set clickEvent(event) {
        this._clickEvent = event;
        this.render();
    }

    get value() {
        return this.querySelector("#searchElement").value;
    }

    render() { 
       this.innerHTML = `
       <div id="search-container" class="search-container">
            <select id="searchElement">
            </select>
            <button id="searchButtonElement" type="submit">Cari Data Provinsi</button>
        </div>
       `;
       this.querySelector("#searchButtonElement").addEventListener("click", this._clickEvent);
       
     }
}
     
customElements.define("search-bar", SearchBar);