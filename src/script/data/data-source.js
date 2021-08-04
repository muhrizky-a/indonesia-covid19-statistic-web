// const baseUrl = "https://indonesia-covid-19.mathdro.id/api";
const baseUrl = "https://covid19.mathdro.id/api/countries/Indonesia";

class DataSource {
    set dataset(data) {
        this._dataset = data;
    }

    static getData(){
       return fetch(`${baseUrl}`)
       .then(response => {
           return response.json();
       })
       .then(responseJson => {
            if(responseJson) {
                return Promise.resolve(responseJson);
            } else {
                return Promise.reject(`{error: true}`);
             }
        })
    }

    

}

 
export default DataSource;