class ProvinsiItem extends HTMLElement {
    set dataProvinsi(data) {
        this._dataProvinsi = data;
        this.render();
    }
  
    renderError(message) {
        this.innerHTML = "";
        this.className = "error";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
  
    render() {
        this.innerHTML = "";
        this.innerHTML += `
                <h2>${this._dataProvinsi[0].provinsi}</h2>

                <table>
                    <tbody>
                        <tr>
                            <th>Total Kasus Positif</th>
                            <td>${this._dataProvinsi[0].kasusPosi}</td>
                        </tr>
                        <tr>
                            <th>Pasien Sembuh</th>
                            <td>${this._dataProvinsi[0].kasusSemb}</td>
                        </tr>
                        <tr>
                            <th>Pasien Meninggal</th>
                            <td>${this._dataProvinsi[0].kasusMeni}</td>
                        </tr>
                    </tbody>
                </table>
             `;
    }
 }
  
 customElements.define("provinsi-item", ProvinsiItem);