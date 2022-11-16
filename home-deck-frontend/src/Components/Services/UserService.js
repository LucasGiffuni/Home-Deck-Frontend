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