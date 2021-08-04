class ProvinsiChart extends HTMLElement {
    set dataset(data) {
    
        for (let i in data){
            let key = data[i];
            let j = i-1;
            while (j >= 0 && data[j].kasusPosi < key.kasusPosi ){
                data[j+1] = data[j];
                j = j-1;
            }
            data[j+1] = key;
        }

        this._data = data.slice(0, 10);
        
        this.render();
    }
  
    renderError(message) {
        this.innerHTML = "";
        this.innerHTML += `<h2 class="placeholder">${message}</h2>`;
    }
  
    render() { 
        
        this.innerHTML = "";
        this.innerHTML += `
            <h4>10 Provisi dengan Kasus Tertinggi di Indonesia</h4>
            <canvas id="provinsiChart"></canvas>
             `;
        let kasusArr = [];
        let provinsiArr = [];

        this._data.forEach( (data) => {
            provinsiArr.push(data.provinsi);
            kasusArr.push(data.kasusPosi);
        });
        const kasusCt = document.getElementById('provinsiChart').getContext("2d");
        new Chart(kasusCt, {
            type: 'bar',
            data: {
                labels: provinsiArr,
                datasets: [{
                    fill: false,
                    label: 'Kasus Positif',
                    data: kasusArr,
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                aspectRatio: 1,
                
                scales: {
                    yAxes: [{
                        ticks: {
                            display: false,
                            beginAtZero: true,
                        }
                    }]
                }
            }
            
        });
       
        
        
    }
    
 }
  
 customElements.define("provinsi-chart", ProvinsiChart);