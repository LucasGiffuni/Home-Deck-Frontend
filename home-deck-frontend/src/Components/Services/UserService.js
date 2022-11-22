import axios from "axios";


export async function validateUser(user, passwd) {

    let res = axios.post(`http://localhost:8080/public/authenticate?user=${user}&clave=${passwd}`)
        .then(response => {
            let serviceResponse = [];

            serviceResponse[0] = response.status;
            serviceResponse[1] = response.data;

            return serviceResponse
        })
        .catch(error => {

            let serviceResponse = [];

            serviceResponse[0] = error.code;
            serviceResponse[1] = error.response.status;


            return serviceResponse
        });

    return res;



}


export async function getWeather() {
   let res = axios.get("https://api.openweathermap.org/data/2.5/weather?lat=-34.840430623512646&lon=-55.99350508317198&appid=7ba74b87a1f48eae9a399bd2df18fb56&lang=sp&units=metric")
   .then(response => {
    let serviceResponse = [];

    serviceResponse[0] = response.data.main;
    serviceResponse[1] = response.data.weather;
    serviceResponse[2] = response.data.wind;

    return serviceResponse
   })

   return res

}