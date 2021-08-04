class ErrorNotification extends HTMLElement {
    set clickEvent(event) {
        this._clickEvent = event;
    }

    set pesan(message) {
        this._pesan = message;
    }

    render(message, event) {
        this.clickEvent = event;
        this.pesan = message;
        this.className = "enabled-flex";
        this.innerHTML = "";
        this.innerHTML += `
            <div class="error-message">
                <h2>Something's Wrong</h2>
                <p><span>Message:</span> ${this._pesan}</p>
                <button id="reloadDataElement" type="submit">Reload</button>
            </div>
             `;
        this.querySelector("#reloadDataElement").addEventListener("click", this._clickEvent);
    }
 }
  
 customElements.define("error-notification", ErrorNotification);