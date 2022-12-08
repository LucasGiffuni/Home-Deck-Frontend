import axios from "axios";


export async function getLightDevices(token) {
    const instance = axios.create({
        baseURL: 'http://192.168.1.6:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    let res = instance.get(`/devices/lights/getLightDevices`)
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

export async function getLightsFromRoom(token, RoomID) {
    const instance = axios.create({
        baseURL: 'http://192.168.1.6:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    let res = instance.get(`/devices/lights/getLightsFromRoom`, {
        params: {
            RoomID
        }
    })
        .then(response => {
            let serviceResponse = [];
            serviceResponse[0] = response.status;
            serviceResponse[1] = response.data;
            console.log(response.data)
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


export async function getOpenDevices(token) {
    const instance = axios.create({
        baseURL: 'http://192.168.1.6:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    let res = instance.get(`/devices/lights/getOpenDevices`)
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

export async function getOpensFromRoom(token, RoomID) {
    const instance = axios.create({
        baseURL: 'http://192.168.1.6:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'application/json'
        }
    });
    let res = instance.get(`/devices/lights/getOpensFromRoom`, {
        params: {
            RoomID
        }
    })
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

export async function getLayoutFromRoom2(token, RoomID) {
    const instance = axios.create({
        baseURL: 'http://192.168.1.6:8080',
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,
            'Content-Type': 'text/plain'
        }
    });
    let res = instance.get(`/devices/layouts/getRoomLayout`, {
        params: {
            RoomID
        }
    })
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

export async function modifyLightDevice(token, DeviceID, Field, Value) {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,

        }
    };


    let res = axios.post(`http://192.168.1.6:8080/public/lights/modifyLightDevice`, config, {
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

export async function createLightDevice(token, DeviceID, RoomID, Name, State) {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,

        }
    };


    let res = axios.post(`http://192.168.1.6:8080/public/lights/createLightDevice`, config, {
        params: {
            DeviceID,
            RoomID,
            Name,
            State
        }
    }).then(response => {
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

    return res

}

export async function modifyOpenDevice(token, DeviceID, Field, Value) {
    const config = {
        headers: {
            'Access-Control-Allow-Origin': '*',
            "Authorization": `Bearer ${token}`,

        }
    };


    let res = axios.post(`http://192.168.1.6:8080/public/lights/modifyOpenDevice`, config, {
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