class KasusSummary extends HTMLElement {
    set dataset(data) {
        this._data = data;
        this.render();
    }
  
    render() {
        this.innerHTML = "";
        this.innerHTML += `
            <div class="summary-item">
                <div class="kasus-item">
                    <div class="item-box kasus-konfirmasi">
                        <h1>${this._data.confirmed.value}</h1>
                        <span>Terkonfirmasi</span>
                    </div>
                </div>
                <div class="kasus-item">
                    <div class="item-box kasus-perawatan">
                        <h1>${this._data.confirmed.value - this._data.recovered.value}</h1>
                        <span>Dalam Perawatan</span>
                    </div>
                </div>
                <div class="kasus-item">
                    <div class="item-box kasus-sembuh">
                        <h1>${this._data.recovered.value}</h1>
                        <span>Sembuh</span>
                    </div>
                </div>
                <div class="kasus-item">
                    <div class="item-box kasus-meninggal">
                        <h1>${this._data.deaths.value}</h1>
                        <span>Meninggal</span>
                    </div>
                </div>
            </div>
             `;
    }
    
    renderError() {
        this.dataset = {
            jumlahKasus: 0,
            perawatan: 0,
            sembuh: 0,
            meninggal: 0
        };
    }
 }
  
 customElements.define("kasus-summary", KasusSummary);