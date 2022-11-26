import axios from "axios";


export async function getLightDevices(token) {

   
    const instance = axios.create({
        baseURL: 'http://localhost:8080',
        timeout: 50000,
        headers: {

            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'

        }
    });
    let res = instance.get(`/devices/lights/getDevices`)
        .then(response => {
            let serviceResponse = [];

            serviceResponse[0] = response.status;
            serviceResponse[1] = response.data;
            console.log("fetching")
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


export async function modifyValue(token, DeviceID, Field, Value) {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,

        }
    };


    let res = axios.post(`http://localhost:8080/public/lights/modifyDevice`, config, {
        params: {
            DeviceID,
            Field,
            Value
        }
    }).then(response => {
        let serviceResponse = [];

        serviceResponse[0] = response.status;
        serviceResponse[1] = response.data;

        return serviceResponse
    })
        .catch(error => {

            let serviceResponse = [];
            console.log(error)
            serviceResponse[0] = error.code;
            serviceResponse[1] = error.response.status;


            return serviceResponse
        });

    return res

}