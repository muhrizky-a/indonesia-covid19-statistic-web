class KasusChart extends HTMLElement {
    set dataset(data) {
        this._data = data;
        this.render();
    }
  
    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
  
    render() { 
        
        this.innerHTML = "";
        this.innerHTML += `
            <canvas id="kasusChart"></canvas>
             `;
        const kasusCt = document.getElementById('kasusChart').getContext("2d");
        new Chart(kasusCt, {
            type: 'doughnut',
            data: {
                labels: ['Dalam Perawatan', 'Sembuh', 'Meninggal'],
                datasets: [{
                    data: [
                        this._data.confirmed.value - this._data.recovered.value,
                        this._data.recovered.value,
                        this._data.deaths.value
                    ],
                    backgroundColor: [
                        'rgba(255, 206, 86, 0.5)',
                        'rgba(75, 192, 192, 0.5)',
                        'rgba(255, 99, 132, 0.5)'
                    ],
                    borderColor: [
                        'rgba(255, 206, 86, 1)',
                        'rgba(75, 192, 192, 1)',
                        'rgba(255, 99, 132, 1)'
                    ],
                    borderWidth: 0.8,
                    
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1
            }
            
        });

    }
    
 }
  
 customElements.define("kasus-chart", KasusChart);