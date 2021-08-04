const baseUrl = "https://indonesia-covid-19.mathdro.id/api";

class DataProvinsi {
    static set dataset(data) {
        this._dataset = data;
    }

    static getData(){
        return fetch(`${baseUrl}/provinsi`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
             if(responseJson.data) {
                 return Promise.resolve(responseJson.data);
             } else {
                return Promise.reject(`{error: true}`);
             }
         })
     }

    static loadOption(){
        const searchSelect = document.querySelector("#searchElement")
        this._dataset.slice(0, 34).forEach( (data) =>{
            const {provinsi} = data;
            const provinsiOption = document.createElement("option");
            provinsiOption.setAttribute("value", provinsi);
            provinsiOption.innerHTML = `${provinsi}`;
            searchSelect.appendChild(provinsiOption);
        });
    }
 
    static searchData(keyword){
        return new Promise ((resolve, reject) => {
            const hasilData = this._dataset.filter( data => data.provinsi.toUpperCase().includes(keyword.toUpperCase()) );
            if (hasilData.length) {
                resolve(hasilData);
            } else {
                reject(`Data Provinsi ${keyword} tidak ditemukan`);
            }
        });
        
       
    }
}

 
export default DataProvinsi;