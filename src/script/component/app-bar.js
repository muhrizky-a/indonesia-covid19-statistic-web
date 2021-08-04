class AppBar extends HTMLElement {
 
    connectedCallback() {
       this.render();
     }
     
     render() { 
       this.innerHTML = `<h2>Statistik COVID-19 di Indonesia</h2>`;
     }
}
     
customElements.define("app-bar", AppBar);