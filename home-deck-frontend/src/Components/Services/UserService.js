import axios from "axios";

const baseURL = "http://localhost:8080";

export async function validateUser(user, passwd) {

    axios.post(`http://localhost:8080/public/authenticate?user=${user}&clave=${passwd}`)
        .then(res => {
            console.log(res);
            console.log(res.data)
        })


}